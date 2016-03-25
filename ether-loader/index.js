var Web3 = require('web3');
var solc = require('solc');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

module.exports = function (source) {
    this.cacheable();
    var callback = this.async();

    var output = solc.compile(source, 1);

    if (output.errors) {
        console.log(output.errors.join('\n'));
        return callback(output.errors.join('\n'), null);
    }

    for (var contractName in output.contracts) {
        var contract = output.contracts[contractName];

        var Contract = web3.eth.contract(JSON.parse(contract.interface));

        var compiled_contract = Contract.new(
                {data: contract.bytecode, from: web3.eth.coinbase},
                function (err, compiledContract) {
                    if (compiledContract.address) {
                        var jsSource = `
                            import web3 from '../web3';

                            const Contract = web3.eth.contract(${contract.interface});
                            export default Contract.at('${compiledContract.address}');
                        `;

                        callback(null, jsSource);
                    }
                }
            );
    }
};
