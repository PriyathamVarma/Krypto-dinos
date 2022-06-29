
module.exports = {


  networks: {
    
    development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 7545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
    },
    
  },
// This is so important to make sure that the contract is deployed to the right network
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "^0.8.0",      // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: 'true',
          runs: 200
                   },
      //  evmVersion: "byzantium"
      // }
    }
  },
};
