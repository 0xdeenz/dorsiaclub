require("@nomiclabs/hardhat-waffle");
require('@nomiclabs/hardhat-truffle5');
require('hardhat-contract-sizer');
require('hardhat-gas-reporter');


// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: "0.8.4",
  gasReporter: {
    enabled: true,
    currency: 'USD',
    coinmarketcap: '7b5edf80-0e66-464e-81f2-a07fcc725a4b',
    gasPrice: 21,
  }
};
