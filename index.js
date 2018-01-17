web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

abi = JSON.parse('[{"constant":false,"inputs":[{"name":"ballotItem","type":"bytes32"}],"name":"totalVotesFor","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ballotItem","type":"bytes32"}],"name":"validBallotItem","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"bytes32"}],"name":"votesReceived","outputs":[{"name":"","type":"uint8"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"x","type":"bytes32"}],"name":"bytes32ToString","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"ballotList","outputs":[{"name":"","type":"bytes32"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"ballotItem","type":"bytes32"}],"name":"voteForBallotItem","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"contractOwner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"inputs":[{"name":"ballotItems","type":"bytes32[]"}],"payable":false,"type":"constructor"}]')

VotingContract = web3.eth.contract(abi);

// See README for deployment steps.
// After deploying, use contractInstance.address to get your deployed address and add the address below
contractInstance = VotingContract.at('0xf4c95f025b6067f43fca65b32f0e82e4b67c0e98');
ballotItems = {"Raccoon": "ballot-item-1", "Cat": "ballot-item-2", "Chocolate Race Horse": "ballot-item-3"};

function voteForBallotItem() {
  ballotItem = $("#ballot-item").val();
  contractInstance.voteForBallotItem(ballotItem, {from: web3.eth.accounts[0]}, function() {
    let div_id = ballotItems[ballotItem];
    $("#" + div_id).html(contractInstance.totalVotesFor.call(ballotItem).toString());
  });
}

$(document).ready(function() {
  ballotItems = Object.keys(ballotItems);
  for (var i = 0; i < ballotItems.length; i++) {
    let name = ballotItems[i];
    let val = contractInstance.totalVotesFor.call(name).toString();
    $("#" + ballotItems[name]).html(val);
  }
});