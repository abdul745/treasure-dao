import web3 from 'web3';
import chainIDs from './contract-configs';
let account

let ConnectMetaMask = async () => {

    if (typeof window.ethereum !== 'undefined') {
        let ethereum = window.ethereum
        let accounts = await ethereum.request({
            method: "eth_requestAccounts",
            params: [{ chainId: chainIDs.ethereum_testnet_chainId }], //add your chain network
            // method: 'eth_requestAccounts'
        });
        account = accounts[0];
        // console.log(account)
        ethereum.on('accountsChanged', function (accounts) {
            account = accounts[0];
            console.log(account)
            // Time to reload your interface with accounts[0]!
        });
        ethereum.on('chainChanged', (chainId) => {
            console.log("network changed.")
            // Handle the new chain.
            // Correctly handling chain changes can be complicated.
            // We recommend reloading the page unless you have good reason not to.
            //window.location.reload();
        });


        let chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log(chainId)
        if (chainId === chainIDs.ethereum_testnet_chainId) {
            if (account) {
                return {
                    success: true,
                    account: account
                }
            } else {
                return {
                    success: false,
                    account: ''
                }
            }
        } else {
            try {
                await window.ethereum.request({
                method: 'wallet_switchEthereumChain',
                    params: [{ chainId: chainIDs.ethereum_testnet_chainId }],
                });
                return {
                    success: true,
                    account: account
                };
            } catch (error) {
                if (error.code === 4902) {
                    try {
                      await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: [
                          {   
                            chainId: chainIDs.ethereum_testnet_chainId,
                            chainName: 'Goerli',
                            rpcUrls: ['https://rpc.ankr.com/eth_goerli'],
                            nativeCurrency: {
                                name: "Goerli  ETH",
                                symbol: "GoerliETH",
                                decimals: 18
                            },
                            blockExplorerUrls: ["https://goerli.etherscan.io/"]
                          },
                        ],
                      });
                    } catch (error) {
                      console.log(error);
                    }
                  }
                   else {
                console.log(error);
                // If window.ethereum is not found then MetaMask is not installed
                alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
              } 
                console.error(error);
                return {
                    success: false,
                    account: ''
                };
            }
            
        }

    } else {
        console.error("You need to install metaMask")
        alert("Please install metaMask extension in your chrome browser.")
        
        return false
    }
}


export { ConnectMetaMask, account }

