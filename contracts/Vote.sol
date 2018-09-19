pragma solidity ^0.4.24;


contract Vote {

    string public title;
    string public voteChairman;
    address public chairperson;

    struct Proposal {
        bytes32 name;   // short name (up to 32 bytes)
        uint voteCount; // number of accumulated votes
        uint index;
    }

    mapping(address => bool) internal alreadyVoted;
    mapping(byte => bool) internal alreadyUsedConditions; 

    bytes32[] public conditions;
    bool public publicContract; 
    Proposal[] public candidates;

    uint public timeStart;
    uint public timeEnd;

    event BadVoting(uint indexed proposal, address indexed voter, bytes32 indexed condition);
    event GoodVoting(uint indexed proposal, address indexed voter, bytes32 indexed condition);

    constructor(address _chairman,bytes32[] _candidates, bytes32[] _conditions, string _voteTitle, string _voteChairman, uint _timeStart, uint _timeEnd,  bool _publicContract) public {
        chairperson = _chairman;
        conditions = _conditions;

        title = _voteTitle;
        voteChairman = _voteChairman;
        timeStart = _timeStart;
        timeEnd = _timeEnd;
        publicContract = _publicContract;
        // For each of the provided proposal names,
        // create a new proposal object and add it
        // to the end of the array.
        for (uint i = 0; i < _candidates.length; i++) {
            // `Proposal({...})` creates a temporary
            // Proposal object and `proposals.push(...)`
            // appends it to the end of `proposals`.
            candidates.push(Proposal({
                name: _candidates[i],
                voteCount: 0,
                index: i
            }));
        }
    }

    function vote(uint proposal, bytes32 _condition) public  {

        require(now  > timeStart, 'voting havent started yet ...');
        require(now < timeEnd, 'voting have already ended ...');
        require(!alreadyVoted[msg.sender], "Already voted.");
        for (uint i =0; i< conditions.length; i++){
            if (conditions[i] == _condition){
                candidates[proposal].voteCount += 1;
                alreadyVoted[msg.sender] = true;
                GoodVoting(proposal,msg.sender,_condition);
                break;
            }
            else{
                BadVoting(proposal,msg.sender,_condition);
                revert('condition is not found ');
            }   
        }
        
    }

    function isEnded() view public returns(bool) {
        if (now >= timeEnd){
            return true;
        }
        return false;
    }

    function getCandidatesCount() public constant returns(uint) {
        return candidates.length;
    }   

    function getCandidate(uint _index) public constant returns(bytes32, uint,uint)  {
        return (candidates[_index].name, candidates[_index].voteCount,candidates[_index].index);
    }


}