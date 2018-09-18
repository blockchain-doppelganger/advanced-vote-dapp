pragma solidity ^0.4.24;

import './Vote.sol';

contract VoteFactory { 
    
    address private admin;
    address[] public allPublicContract;

    mapping(address => address[]) public ownerToContracts;

    constructor(){
        admin = msg.sender;
    }
    
    function createVote(bytes32[] _candidates, bytes32[] _conditions, string _voteTitle, string _voteChairman, uint _timeStart, uint _timeEnd,  bool _publicContract){
        require(_candidates.length > 0);
        
        Vote c = new Vote(_candidates, _conditions, _voteTitle, _voteChairman, _timeStart, _timeEnd, _publicContract);
        if (_publicContract) {
            allPublicContract.push(c);
        }
        
        ownerToContracts[msg.sender].push(c);
    }

    function getContractCount() constant public returns(uint) {
        return allPublicContract.length;
    }

    function getContractCount(address _owner) constant public returns(uint) {
        return ownerToContracts[msg.sender].length;
    }

}