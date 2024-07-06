const Wallet = artifacts.require("Wallet");

module.exports = async (deployer, _network, accounts) => {
    let addresses = [accounts[0], accounts[1], accounts[3]];
    await deployer.deploy(Wallet, addresses, 2);
    let wallet = await Wallet.deployed();
}