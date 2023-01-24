import web3 from 'web3';

const polygon_mainnet_chainId = web3.utils.toHex(137);
const polygon_testnet_chainId = web3.utils.toHex(80001);

const ethereum_mainnet_chainId = web3.utils.toHex(1);
const ethereum_testnet_chainId = web3.utils.toHex(5); //this is goerli testnet

const BSC_mainnet_chainId = web3.utils.toHex(56);
const BSC_testnet_chainId = web3.utils.toHex(97);

const NFT_ASSOCIATE_CONTRACT_ADDRESS = "0xc79e441394EF1F3c64c41C1e9c7609AA578F47d3";
export default {
    polygon_mainnet_chainId,
    polygon_testnet_chainId,

    ethereum_mainnet_chainId,
    ethereum_testnet_chainId,

    BSC_mainnet_chainId,
    BSC_testnet_chainId,

    NFT_ASSOCIATE_CONTRACT_ADDRESS
}

