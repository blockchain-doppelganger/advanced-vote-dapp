const contract_address= '0x4570dd2bc17b6f8c0bf5f58f51148c4af2d1482c'
const abi =  [
	{
		"constant": false,
		"inputs": [
			{
				"name": "_chairman",
				"type": "address"
			},
			{
				"name": "_candidates",
				"type": "bytes32[]"
			},
			{
				"name": "_conditions",
				"type": "bytes32[]"
			},
			{
				"name": "_voteTitle",
				"type": "string"
			},
			{
				"name": "_voteChairman",
				"type": "string"
			},
			{
				"name": "_timeStart",
				"type": "uint256"
			},
			{
				"name": "_timeEnd",
				"type": "uint256"
			},
			{
				"name": "_publicContract",
				"type": "bool"
			}
		],
		"name": "createVote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "allPublicContract",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_owner",
				"type": "address"
			}
		],
		"name": "getContractCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContractCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "address"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "ownerToContracts",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}]
const abiVote = [
	{
		"constant": true,
		"inputs": [],
		"name": "voteChairman",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "conditions",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "chairperson",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "candidates",
		"outputs": [
			{
				"name": "name",
				"type": "bytes32"
			},
			{
				"name": "voteCount",
				"type": "uint256"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "_index",
				"type": "uint256"
			}
		],
		"name": "getCandidate",
		"outputs": [
			{
				"name": "",
				"type": "bytes32"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "title",
		"outputs": [
			{
				"name": "",
				"type": "string"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "proposal",
				"type": "uint256"
			},
			{
				"name": "_condition",
				"type": "bytes32"
			}
		],
		"name": "vote",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "publicContract",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "isEnded",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getCandidatesCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "timeStart",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "timeEnd",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "_chairman",
				"type": "address"
			},
			{
				"name": "_candidates",
				"type": "bytes32[]"
			},
			{
				"name": "_conditions",
				"type": "bytes32[]"
			},
			{
				"name": "_voteTitle",
				"type": "string"
			},
			{
				"name": "_voteChairman",
				"type": "string"
			},
			{
				"name": "_timeStart",
				"type": "uint256"
			},
			{
				"name": "_timeEnd",
				"type": "uint256"
			},
			{
				"name": "_publicContract",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "proposal",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "condition",
				"type": "bytes32"
			}
		],
		"name": "BadVoting",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "proposal",
				"type": "uint256"
			},
			{
				"indexed": true,
				"name": "voter",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "condition",
				"type": "bytes32"
			}
		],
		"name": "GoodVoting",
		"type": "event"
	}]
var voteInstance;
var vote_address;

function readTextFile(file){

     var reader = new FileReader();
     reader.onload = (function(theFile) {
     	var text = reader.readAsText(theFile);
     	return text
     });
      // Closure to capture the file information
      // Read in the image file as a data URL.eader.readAsText(file);
      reader.readAsText(file);
}

// after submit form 
function preprocessData(event){
	event.preventDefault();

	 function onlyUnique(value, index, self) { 
    	return self.indexOf(value) === index;
	}
	// usage example:
	// var a = ['a', 1, 'a', 2, '1'];
	// var unique = a.filter( onlyUnique ); 

	Array.prototype.diff = function(a) {
    	return this.filter(function(i) {return a.indexOf(i) < 0;});
	};

	////////////////////  
	// Examples  
	////////////////////

	// [1,2,3,4,5,6].diff( [3,4,5] );  
	// // => [1, 2, 6]

	var public = false;
	if ($('#publicVote').is(":checked")){
		public = true;
	}

	$('#public_modal').html(String(public));
	// console.log(public);

	$('#modal_error').hide();
	$('#modal_error').html();
	$('#error').html();

	
	var useTimestamps = false;
    if ($('#useTimestamps').is(":checked") ){
    	useTimestamps = true;
    }

    var startTimestamp;
    var endTimestamp;
    if (useTimestamps == true) {
    	console.log('use timestamps ...');
    	startTimestamp = parseInt($('#startTime').val());
    	endTimestamp = parseInt($('#endTime').val());
    }

    else {
    	let startDate = $('#startDate').val();
		let endDate = $('#endDate').val();
		startTimestamp = Math.round(new Date(startDate).getTime()/1000);
		endTimestamp = Math.round(new Date(endDate).getTime()/1000)
    }


    // console.log('startTimestamp',startTimestamp);
    // console.log('endTimestamp',endTimestamp);

	if (endTimestamp > startTimestamp) {
		$('#error').html();
	}
	else {
		$('#error').html('Choose correct end date (timestamp)...');
		return;

	}


	var title = $('#title').val();
	var chairman = $('#owner').val();

	$('#title_modal').html(title);
	$('#chairman_modal').html(chairman);

	if (!$("#candidates").val()) {
    	$('#error').html('You must enter at least one candidates ...');
		return;
	}

	var candidates = $('#candidates').val().split(',');

	if (!$("#conditions").val()) {
    	$('#error').html('You must enter at least one conditions ...');
		return;
	}



	var conditions = $('#conditions').val().split(',');

    var numOfVoters = parseInt($('#numberOfVoters').val());
    if (numOfVoters < 1) {
    	numOfVoters = 0;
    	$('#maxVoters_modal').html('unlimited');
    }
    else {
    	$('#maxVoters_modal').html(numOfVoters);
    }

    var ts = new Date(startTimestamp*1000);
	var ts2 = new Date(endTimestamp*1000);
    $('#start_datetime_modal').html(startTimestamp + '   ('+ts.toDateString()+')');
    $('#end_datetime_modal').html(endTimestamp + '   ('+ts2.toDateString()+')');

    $('#candidates_number_modal').html(candidates.length);
    $('#conditions_number_modal').html(conditions.length);


	$('.modal').modal('show');

	// var fileForCandidates = ($('#candidates_file'))[0].files[0];
 //    var readerCandidate = new FileReader();

 //    var fileCandidates = [];
 //    readerCandidate.onload = function(){
 //      let text = readerCandidate.result;
 //      console.log('text from candidates file ',text);
 //      fileCandidates =  fileCandidates.concat(text.split(','));
 //      console.log('fileCandidates',fileCandidates);
 //      return fileCandidates;
	//  };

	//  try{
	//  	readerCandidate.readAsText(fileForCandidates);
	//  }
	//  catch(er) {
	//  	console.log('error',er);

	//  }
    
 //    var onlyUniqueCandidates = false;
 //    if ($('#getUniqueCandidates').is(":checked")){
 //    	onlyUniqueCandidates = true;
 //    }

 //    var enteredMinusInfile = false;
 //    if ($('#candidatesEnteredMinusInfile').is(":checked")){
 //    	enteredMinusInfile = true;
 //    }


 //    var textCandidates = $('#candidates').val().split(',');
 //    var all_candidates;

 //    console.log('fileCandidates',fileCandidates);
 //    if (enteredMinusInfile){
 //    	console.log('fileCandidates',fileCandidates);
 //    	fileCandidates = fileCandidates.diff(textCandidates);
 //    	if (onlyUniqueCandidates){
 //    		all_candidates = fileCandidates.filter(onlyUnique);

 //    	}
 //    	else{
 //    		all_candidates = fileCandidates;
 //    	}

 //    }
 //    else {
	// 	all_candidates = fileCandidates.concat(textCandidates);
 //    	if (onlyUniqueCandidates) { 
 //    		all_candidates = all_candidates.filter(onlyUnique);
 //    	}

 //    }


 //    console.log('all_candidates',all_candidates);


    // if ((textCandidates.length > 0 ) && (fileCandidates.legth > 0)){
    // 	// $('.modal-body').append('<p>You entered cadidates in textfiled and choose file...');    
    // 	console.log('yep...')
    // }



 //    var onlyUniqueConditions = false;
 //    if ($('#getUniqueConditions').is(":checked")){
 //    	onlyUniqueConditions = true;
 //    }

 //    var conditionEnteredMinusInfile = false;
 //    if ($('#conditionsMinus').is(":checked")){
 //    	conditionEnteredMinusInfile = true;
 //    }

 //    var useOnceConditions = false;
 //    if ($('#conditionsUsedOnce').is(":checked")){
 //    	useOnceConditions = true;
 //    }


 //    var textConditions = $('#conditions').val().split(',');
	// var fileForConditions = ($('#conditions_file'))[0].files[0];

 //    var readerCondition = new FileReader();

 //    var fileConditions = [];
 //    readerCondition.onload = function(){
 //      let text = readerCondition.result;
 //      fileConditions = text.split(',');
	//  };

	// try{
	//  	readerCondition.readAsText(fileForConditions);
	//  }
	//  catch(er) {
	//  	console.log('error during condition file reading ..',er);

	//  }





    // var startTime = $('#startDate').val();
    // var endDate = $('#endDate').val();

    // console.log(endDate);




	// console.log($('#conditions_file').val());
	// var selectedFile = $('#conditions_file').get(0).files[0];
	// console.log('conditions -',selectedFile);
	// readTextFile(selectedFile);
	// var candidatesString = $('#candidates').val();
	// var candidates = candidatesString.split(',');
	// console.log(candidates);
}

function render(){
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();

	if(dd<10) {
	    dd = '0'+dd
	} 
	if(mm<10) {
	    mm = '0'+mm
	} 
	// today = dd+'.'+mm+'.'+yyyy;
	todayString =yyyy + '-' + mm + '-' + dd;

	// console.log(today);
	$('#startDate').attr("value", todayString);
	$('#startDate').attr("min", todayString);
	$('#endDate').attr("min", todayString);

	$('#startTime').attr('min',Math.round(today.getTime() / 1000));
	$('#startTime').attr('value',Math.round(today.getTime() / 1000));
	$('#endTime').attr('min',Math.round(today.getTime() / 1000));


	var contractInstance = web3.eth.contract(abi).at(contract_address);
	var publicContractCount;
	contractInstance.getContractCount.call(web3.eth.accounts[0],function(er,res){
		publicContractCount = res.toNumber();
		$('#myVoteCount').html(publicContractCount);
		for (var i =0; i<publicContractCount; i++){
			
				contractInstance.ownerToContracts.call(web3.eth.accounts[0],i,function(er,voteAddr){
					var voteInstance = web3.eth.contract(abiVote).at(voteAddr);
					var title;
					voteInstance.title.call(function(er,res){
						var node = document.createElement("p");                 // Create a <li> node
						var t = document.createTextNode('title: ' + res);  
						node.appendChild(t);
						var hr = document.createElement("hr");                 // Create a <li> node
						document.getElementById("my_vote_block").appendChild(hr);
						document.getElementById("my_vote_block").appendChild(node);
						var node = document.createElement("p");                 // Create a <li> node
						var t = document.createTextNode('address: ' + voteAddr);  
						node.appendChild(t);
						document.getElementById("my_vote_block").appendChild(node);
					});
				});



		};
	});
}

// // for onchange 
function handleFiles(event){

    var input = event.target;

    let reader = new FileReader();
    reader.onload = function(){
      var text = reader.result;
      let conditions = text.split(',');
      let first5Elements = conditions.slice(0,5);
      $('#fileInfo').html('Find ' + conditions.length + ' conditions: '+first5Elements.join(',')+ ' ...')
      // var output = document.getElementById('fileInfo');
      // output.src = dataURL;\
      $('#cond_label').html(input.files[0].name)
	 };
    reader.readAsText(input.files[0]);
};

function handleCandidatesFiles(event){

    var input = event.target;

    let reader = new FileReader();

    reader.onload = function(){
      let text = reader.result;
      var candidates = text.split(',');
      let first5Elements = candidates.slice(0,5);
      $('#candidatesFileInfo').html('Find ' + candidates.length + ' candidates: '+first5Elements.join(',')+ ' ...')
	  $('#candidates_file_label').html(input.files[0].name)
	 };
    reader.readAsText(input.files[0]);
};

function changeEndDate(event){
	let startDate = $('#startDate').val();
	$('#endDate').attr('min', startDate);
}

function changeMinEndTime(event){
	let startTime = $('#startTime').val();
	$('#endTime').attr('min', startTime);
}

function useTimestamp(){

	$('#startDate').prop('disabled', !($('#startDate').prop('disabled')));
	$('#endDate').prop('disabled', !($('#endDate').prop('disabled')));

	$('#startTime').prop('disabled', !($('#startTime').prop('disabled')));
	$('#endTime').prop('disabled', !($('#endTime').prop('disabled')));
}

function initWeb3(){


	if (typeof web3 !== 'undefined') {
	  web3 = new Web3(web3.currentProvider);
	  console.log('done ...')
	} else {
	  // Set the provider you want from Web3.providers
	  $('#web3Error').html('Please connect to Metamask and refresh page ...');
	}

	var networkId = web3.version.network;
	var user_address = web3.eth.accounts[0];
	console.log(user_address);
	var networkName;

	switch (networkId) {
		case "1":
			networkName = 'Mainnet';
			break;
		case "2":
			networkName = 'Kovan';
			break;
		case "3":
			networkName = 'Ropsten';
			break;
		case "4":
		 	networkName = 'Rinkeby';
			break;

		default:
			networkName = 'Network with id '+networkId;

	}

	console.log(networkName);
	$('#networkName').html(networkName);
	$('#userAddress').html(user_address.slice(0,10)+'...');

	$('#createBLock').hide();
	$('#loadingBlock').hide("slow");

	render();
	getHome();
}


function getHome() {
	$('#createBLock').hide();
	$('#home_block').show();
	$('#my_vote_block').hide();
	$('#vote').hide();

	var contractInstance = web3.eth.contract(abi).at(contract_address);
	var publicContractCount;
	contractInstance.getContractCount.call('',function(er,res){
		publicContractCount = res.toNumber();
		$('#contractCount').html(publicContractCount);
	});
}

function getMyVote() {
	$('#createBLock').hide();
	$('#home_block').hide();
	$('#vote').hide();
	$('#my_vote_block').show();
}

function getCreatePage() {
	$('#createBLock').show();
	$('#home_block').hide();
	$('#vote').hide();
	$('#my_vote_block').hide();

	var s = web3.toHex('sauliak nick ruslanovych',32);
	var s2 = web3.toHex('sprometchenko olexandr rostuslavovych',32);
	console.log(web3.toAscii('0x7361756c69616b206e69636b207275736c616e6f767963680000000000000000'));
	console.log(web3.toAscii("0x7370726f6d65746368656e6b6f206f6c6578616e647220726f737475736c6176"));
}

function searchVote(){

	var searchData = $('#search').val();
	// console.log('searchData',searchData);
	var isAddress =  web3.isAddress(searchData);
	// console.log(isAddress);
	if (isAddress == true){
		$('#createBLock').hide();
		$('#home_block').hide();
		$('#vote').show();
		$('#my_vote_block').hide();
		vote_address = searchData;
		voteInstance = web3.eth.contract(abiVote).at(searchData);
		var title ;
		voteInstance.title.call(function(er,res){
			$('#vote_title').html(res);
		});
		voteInstance.voteChairman.call(function(er,res){
			$('#vote_chairman').html(res);
		});
		voteInstance.timeEnd.call(function(er,res){
			let ts = new Date(res*1000);
			$('#vote_end_date').html(ts.toDateString());
		});
		voteInstance.timeStart.call(function(er,res){
			let ts = new Date(res*1000);
			$('#vote_start_date').html(ts.toDateString());
		});

		var myNode = document.getElementById("vote_candidates");
		while (myNode.firstChild) {
		    myNode.removeChild(myNode.firstChild);
		}

		var myNode = document.getElementById("vote_candidates_res");
		while (myNode.firstChild) {
		    myNode.removeChild(myNode.firstChild);
		}

		var voteC
		$('#vote_cand_info').html('Name - index');
		voteInstance.getCandidatesCount.call(function(er,res){
			voteCandidatesCount = res.toNumber();
			// console.log('voteCandidatesCount',voteCandidatesCount);
			for (var i=0; i<voteCandidatesCount;i++){
				var max_index = 0;
				voteInstance.getCandidate.call(i, function(er,res){
					max_index = res[2];
					var node = document.createElement("li");                 // Create a <li> node
					var t = document.createTextNode(web3.toAscii(res[0].replace(/\u0000/g, '')) + '  -  ' +res[2]);  
					node.appendChild(t);
					document.getElementById("vote_candidates").appendChild(node);
					$('#indexCandidates').attr('max',max_index);
				});
			}
		})

		voteInstance.isEnded.call(function(er,res){
			if (res == true){
				$('#vote_params').hide();
				$('#vote_candidates_block').hide();
				$('#vote_button').hide();
				$('#vote_cand_res').html('Candidates - number of votes');
				$('#vote_ended').show();
				voteInstance.getCandidatesCount.call(function(er,res){
					voteCandidatesCount = res.toNumber();
					for (var i=0; i<voteCandidatesCount;i++){
						var max_index = 0;
						voteInstance.getCandidate.call(i, function(er,res){
							var node = document.createElement("li");                 // Create a <li> node
							var t = document.createTextNode(web3.toAscii(res[0].replace(/\u0000/g, '')) + '  -  ' +res[1]);  
							node.appendChild(t);
							document.getElementById("vote_candidates_res").appendChild(node);
						});
					}
				})

			}
			else{
				$('#vote_params').show();
				$('#vote_candidates_block').show();
				$('#vote_button').show();
				$('#vote_ended').hide();
				voteInstance.chairperson.call(function(er,res){
					console.log(res);

					if (res == web3.eth.accounts[0]){
						$('#vote_cand_res').html('Candidates - number of votes');
						voteInstance.getCandidatesCount.call(function(er,res){
							voteCandidatesCount = res.toNumber();
							for (var i=0; i<voteCandidatesCount;i++){
								var max_index = 0;
								voteInstance.getCandidate.call(i, function(er,res){
									var node = document.createElement("li");                 // Create a <li> node
									var t = document.createTextNode(web3.toAscii(res[0].replace(/\u0000/g, '')) + '  -  ' +res[1]);  
									node.appendChild(t);
									document.getElementById("vote_candidates_res").appendChild(node);
								});
							}
						})
					}
					else{
						$('#vote_cand_res').html('');
					}
				})
			}
		})
	// 	voteInstance.isEnded.call(function(er,res){
	// 		if (res == true) {
	// 			$('#vote_cand_info').html('Name - the number of voters');
	// 			$('#vote_button').hide();
	// 			$('#vote_ended').show();
	// 			voteInstance.getCandidatesCount.call(function(er,res){
	// 				voteCandidatesCount = res.toNumber();
	// 				for (var i=0; i<voteCandidatesCount;i++){
	// 					voteInstance.getCandidate.call(i, function(er,res){
	// 						var node = document.createElement("li");                 // Create a <li> node
	// 						var t = document.createTextNode(web3.toAscii(res[0].replace(/\u0000/g, ''))+'  -   '+res[1]);  
	// 						node.appendChild(t);
	// 						document.getElementById("vote_candidates").appendChild(node);
	// 					});
	// 				}
	// 			})
	// 		}
	// 		else{
	// 			$('#vote_button').show();
	// 			$('#vote_ended').hide();
	// 			voteInstance.chairperson.call(function(er,res){
	// 				contract_instance.getContractCount.call(web3.eth.accounts[0],function(er,res){
	// 					voteNumber = res.toNumber();
	// 					for (var i=0; i<voteNumber;i++){
	// 						contract_instance.ownerToContracts.call(web3.eth.accounts[0],i function(er,res){
	// 							console.log(res);
	// 							if (res == searchData){
	// 								$('#vote_cand_info').html('Name - index - the number of voters');
	// 								voteInstance.getCandidatesCount.call(function(er,res){
	// 									voteCandidatesCount = res.toNumber();
	// 									// console.log('voteCandidatesCount',voteCandidatesCount);
	// 									for (var i=0; i<voteCandidatesCount;i++){
	// 										var max_index = 0;
	// 										voteInstance.getCandidate.call(i, function(er,res){
	// 											max_index = res[2];
	// 											var node = document.createElement("li");                 // Create a <li> node
	// 											var t = document.createTextNode(web3.toAscii(res[0].replace(/\u0000/g, '')) + '  -  ' +res[2]+'  -  '+res[1]);  
	// 											node.appendChild(t);
	// 											document.getElementById("vote_candidates").appendChild(node);
	// 											$('#indexCandidates').attr('max',max_index);
	// 										});
	// 									}
	// 								})
	// 							}

	// 						});
	// 					}
	// 				})

	// 			})
	// 	// 			else {
	// 	// 				$('#vote_cand_info').html('Name - index');
	// 	// 				voteInstance.getCandidatesCount.call(function(er,res){
	// 	// 					voteCandidatesCount = res.toNumber();
	// 	// 					// console.log('voteCandidatesCount',voteCandidatesCount);
	// 	// 					for (var i=0; i<voteCandidatesCount;i++){
	// 	// 						var max_index = 0;
	// 	// 						voteInstance.getCandidate.call(i, function(er,res){
	// 	// 							max_index = res[2];
	// 	// 							var node = document.createElement("li");                 // Create a <li> node
	// 	// 							var t = document.createTextNode(web3.toAscii(res[0].replace(/\u0000/g, '')) + '  -  ' +res[2]);  
	// 	// 							node.appendChild(t);
	// 	// 							document.getElementById("vote_candidates").appendChild(node);
	// 	// 							$('#indexCandidates').attr('max',max_index);
	// 	// 						});
	// 	// 					}
	// 	// 				})
	// 	// 			}
	// 	// 		});
	// 	// 	}
	// 	// });

		



	// 	}
	// })
	}
}

////
function createVote(){


	function onlyUnique(value, index, self) { 
    	return self.indexOf(value) === index;
	}
	// usage example:
	// var a = ['a', 1, 'a', 2, '1'];
	// var unique = a.filter( onlyUnique ); 

	Array.prototype.diff = function(a) {
    	return this.filter(function(i) {return a.indexOf(i) < 0;});
	};

	////////////////////  
	// Examples  
	////////////////////

	// [1,2,3,4,5,6].diff( [3,4,5] );  
	// // => [1, 2, 6]

	var public = false;
	if ($('#publicVote').is(":checked")){
		public = true;
	}

	
	var useTimestamps = false;
    if ($('#useTimestamps').is(":checked") ){
    	useTimestamps = true;
    }

    var startTimestamp;
    var endTimestamp;
    if (useTimestamps == true) {
    	// console.log('use timestamps ...');
    	startTimestamp = parseInt($('#startTime').val());
    	endTimestamp = parseInt($('#endTime').val());
    }

    else {
    	let startDate = $('#startDate').val();
		let endDate = $('#endDate').val();
		startTimestamp = Math.round(new Date(startDate).getTime()/1000);
		endTimestamp = Math.round(new Date(endDate).getTime()/1000)
    }

	if (endTimestamp > startTimestamp) {
	}
	else {
		return;

	}


	var title = $('#title').val();
	var chairman = $('#owner').val();
	if (!$("#candidates").val()) {
		return;
	}

	var candidates = $('#candidates').val().split(',');

	if (!$("#conditions").val()) {
		return;
	}

	var conditions = $('#conditions').val().split(',');
    var numOfVoters = parseInt($('#numberOfVoters').val());


	var candidatesBytes = [];
	candidates.forEach(function(element) {
	  candidatesBytes.push(web3.toHex(element,32));
	});

	var conditionsBytes = [];
	conditions.forEach(function(element) {
	  conditionsBytes.push(web3.toHex(element,32));
	});

	console.log(candidatesBytes);
	console.log(conditionsBytes);

    var contract_instance = web3.eth.contract(abi).at(contract_address);

    var myCallData = contract_instance.createVote.getData(web3.eth.accounts[0],candidatesBytes,conditionsBytes, title, chairman, startTimestamp, endTimestamp, public);
    
    var estimateGas;
    web3.eth.estimateGas({to: contract_address, data: myCallData}, function(er,res){
		estimateGas = res; console.log(res);
    	 web3.eth.sendTransaction({from:web3.eth.accounts[0], to:contract_address, data: myCallData, gas:estimateGas},function(error, transactionHash) {console.log('contract deployed ..')});
    });	


   
	// contract_instance.createVote({ from: web3.eth.accounts[0], gas: estimateGas ,data:myCallData},function(error, transactionHash) {})
	// console.log(result); // "0x0000000000000000000000000000000000000000000000000000000000000015
}

function vote(){

	var vote_condition = web3.toHex($('#voteCondition').val(),32);
	var candidateIndex = $('#indexCandidates').val();
	console.log(vote_address);

    var myCallData = voteInstance.vote.getData(candidateIndex,vote_condition);
    var estimateGas;
    web3.eth.estimateGas({to: vote_address, data: myCallData}, function(er,res){
		estimateGas = res;
    	 web3.eth.sendTransaction({from:web3.eth.accounts[0], to:vote_address, data: myCallData, gas:estimateGas},function( error, transactionHash) {
    	 	alert('you vote ...');console.log('contract deployed ..')
    	 });
    	 
    });	

}

$(window).on('load',function(){
	initWeb3();

})