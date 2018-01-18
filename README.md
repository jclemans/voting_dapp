# A Demo Voting App Built Using Ethereum Smart Contract

## Dependencies

* node / [npm](https://www.npmjs.com/)
* ethereumjs-testrpc 
* web3@0.20.1
* solc

## Steps to Run

Install dependencies
Run testrpc:
```
node_modules/ethereumjs-testrpc/build/cli.node.js
```

Go into a node terminal prompt:
```
vote_dapp (master ✔) ᐅ node
```

Set up and deploy a contract:
```
> Web3 = require('web3')
> web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
> code = fs.readFileSync('Vote.sol').toString()
> solc = require('solc')
> compiledCode = solc.compile(code)
> abiDefinition = JSON.parse(compiledCode.contracts[':Vote'].interface)
> VotingContract = web3.eth.contract(abiDefinition)
> byteCode = compiledCode.contracts[':Vote'].bytecode
> deployedContract = VotingContract.new(['Raccon','Cat','Chocolate Race Horse'],{data: byteCode, from: web3.eth.accounts[0], gas: 4700000})
> deployedContract.address
> contractInstance = VotingContract.at(deployedContract.address)
```

## Credits

Demo inspired by "A Guide to Building Your First Decentralized Application" by Siraj Raval, which was inspired by [maheshmurthy](https://gist.github.com/maheshmurthy)