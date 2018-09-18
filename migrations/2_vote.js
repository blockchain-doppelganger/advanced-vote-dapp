var Vote = artifacts.require("./Vote.sol");
var VoteFactory = artifacts.require("./VoteFactory.sol");

var n = web3.fromAscii('roman nikitin viktorovych',32);
var n2 = web3.fromAscii('nick sauliak viktorovych',32);
var n3 = web3.fromAscii('olia',32);

var c = web3.fromAscii('123',32);
// console.log('hello fromAscii',c);
var voteTitle = 'example voting';
var voteChairman = 'university';

var d = new Date();
var timeStart = Math.round(d.getTime()/1000) + 30;
var timeEnd = Math.round(d.getTime()/1000) + 240;

console.log(n,c);
console.log(timeStart);
console.log(timeEnd);

module.exports = function(deployer) {
  deployer.deploy(Vote,[n,n2,n3],[c], voteTitle, voteChairman, timeStart, timeEnd, true);
  deployer.deploy(VoteFactory);
};










// var Vote = artifacts.require("./Vote.sol");
// var Exp =  artifacts.require("./Exp.sol");

// var buffer = new ArrayBuffer(2);
// buffer.push(2);
// buffet.push();
// module.exports = function(deployer) {
//   deployer.deploy(Exp,);
// };