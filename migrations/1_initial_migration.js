const Migrations = artifacts.require("Migrations");
const Vote = artifacts.require("Vote");

module.exports = function (deployer, network, accounts) {
  deployer.deploy(Migrations);
  deployer.deploy(Vote, [accounts[0], accounts[1]]);
};
