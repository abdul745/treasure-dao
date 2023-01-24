import ABI from './ABI.json'
import Web3 from 'web3';
import contractConfigs from './contract-configs';
let ADDRESS = contractConfigs.NFT_ASSOCIATE_CONTRACT_ADDRESS;  //your contract address goes here.

let contractConnection = async () => {
    let web3 = new Web3(window.ethereum);
    let contract = new web3.eth.Contract(ABI, ADDRESS);
    return contract
}



export { contractConnection }