// require("@nomiclabs/hardhat-ethers");
require("@openzeppelin/hardhat-upgrades");
require("@nomiclabs/hardhat-etherscan");

require("dotenv").config();

module.exports = {
 solidity: "0.8.10",
 networks: {
   kovan: {
     url: `https://sepolia.infura.io/v3/ace13403824d4f809e011d9d547a4aa1${process.env.INFURA_API_KEY}`,
     accounts: [process.env.PRIVATE_KEY],
   },
 },
 etherscan: {
   apiKey: process.env.ETHERSCAN_API_KEY,
 },
};