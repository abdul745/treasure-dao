import { contractConnection } from "./contract";
import { ConnectMetaMask, account } from "./metaMask";
import Web3 from 'web3';
export let signMsg = async () => {
  let metamask = await ConnectMetaMask();

  console.log(Web3)
  let web3 = new Web3(window.ethereum);


  const signature = await web3.eth.sign(web3.utils.sha3("Hello world"),account)
  console.log(signature);
}
export let createNFT = async (to, editions, URIs) => {
  let contract = await contractConnection();
  return contract.methods
    .createNFT(to, editions, URIs)
    .send(
      {
        from: account,
        gasPrice: "20000000000",
      },
      (error, transactionHash) => {
        console.log(error);
        console.log(transactionHash);
        return {
          success: true,
          transactionHash: transactionHash,
        };
      }
    )
    .on("error", function (error) {
      console.log(error);
      return {
        success: false,
        transactionHash: "",
      };
    });
};

export let listNFT = async (tokenID, fixPrice) => {
  let contract = await contractConnection();
  return contract.methods
    .listNFT(tokenID, fixPrice)
    .send(
      {
        from: account,
        gasPrice: "20000000000",
      },
      (error, transactionHash) => {
        console.log(error);
        console.log(transactionHash);
        return {
          success: true,
          transactionHash: transactionHash,
        };
      }
    )
    .on("error", function (error) {
      console.log(error);
      return {
        success: false,
        transactionHash: "",
      };
    });
};

export let unlistNFT = async (tokenID) => {
  let contract = await contractConnection();
  return contract.methods
    .listNFT(tokenID)
    .send(
      {
        from: account,
        gasPrice: "20000000000",
      },
      (error, transactionHash) => {
        console.log(error);
        console.log(transactionHash);
        return {
          success: true,
          transactionHash: transactionHash,
        };
      }
    )
    .on("error", function (error) {
      console.log(error);
      return {
        success: false,
        transactionHash: "",
      };
    });
};

export let buyNFT = async (tokenID) => {
  let contract = await contractConnection();
  return contract.methods
    .buyNFT(tokenID)
    .send(
      {
        from: account,
        gasPrice: "20000000000",
      },
      (error, transactionHash) => {
        console.log(error);
        console.log(transactionHash);
        return {
          success: true,
          transactionHash: transactionHash,
        };
      }
    )
    .on("error", function (error) {
      console.log(error);
      return {
        success: false,
        transactionHash: "",
      };
    });
};