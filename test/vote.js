
var Vote = artifacts.require('./Vote.sol');
var Web3 = require('web3');
// const util = require('ethereumjs-util');

// create an instance of web3 using the HTTP provider.
// NOTE in mist web3 is already available, so check first if it's available before instantiating
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));

contract('Vote', function(accounts) {

	it("Should deploy contract", function() {
		return Vote.deployed().then(function(instance){
			vote_contract = instance;
			 // assert.isTrue(true);
			return vote_contract.chairperson();
		}).then(function(owner){
			assert.equal(accounts[0], owner, 'admin must be same as contract owner');
			return vote_contract.getCandidatesCount.call();
		}).then(function(candidatesCount){
			assert.equal(candidatesCount, 3, 'we didnt add any candidates');
			return vote_contract.getCandidate.call(0);
		}).then(function(res){
			assert.equal(res[1],0,'initial vote count for each candidates must be zero ...');
			assert.equal(web3.toAscii(res[0]).replace(/\u0000/g, ''), 'roman nikitin viktorovych','first candidates name must be roman ...');
			return vote_contract.conditions(0);
		}).then(function(conditions){
			assert.equal(web3.toAscii(conditions).replace(/\u0000/g, ''), '123')
		});
	});

	it('testing vote function', function(){
		return Vote.deployed().then(function(instance){
			vote_contract = instance;
			return vote_contract.getCandidate.call(0);
		}).then(function(candidates){
			assert.equal(candidates[1],0,'must have zero voice');
			return vote_contract.vote(0, web3.fromAscii('123',32),{from:accounts[0]});
		}).then(function(receipt){
			return vote_contract.getCandidate.call(0);
		}).then(function(candidates){
			assert.equal(candidates[1].toNumber(),1,'must have one voice');
			return vote_contract.vote(2, web3.fromAscii('123',32),{from:accounts[0]});
		}).then(assert.fail).catch(function(error){
			assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
		})
	});

});
