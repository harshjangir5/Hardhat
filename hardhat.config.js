require("@nomicfoundation/hardhat-toolbox");
// const metamask_private_key = "0x"+"e00cf56d40e7f2729bcb3a5760b4b97ec17bb2db62e70ede4a5e0090d923f36a";

/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {
  solidity: "0.8.24",
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/0576367bfc91419b8a4d29e165d20acb",
      accounts: ["e00cf56d40e7f2729bcb3a5760b4b97ec17bb2db62e70ede4a5e0090d923f36a"],
    },
  },
};
