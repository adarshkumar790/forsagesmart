require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


module.exports = {
  solidity: "0.8.4",
  networks: {
    arbitrumSepolia: {
      url: "https://arb-sepolia.g.alchemy.com/v2/zOqi5xn38BylY0ZbjEWNiK89EU7xnORO",
      accounts: ["0x7f780ccbb62bc4f5021beb0ae4800b021ae78f60b474705e0a3e27c71df6c252"]
      // accounts: [PRIVATE_KEY]
    },
    ethereumMainnet: {
      url: "https://eth-mainnet.g.alchemy.com/v2/FOfDIuUV7p5hyZ4srKkRrAXb4pSI0ZCt",
      accounts: ["0x7f780ccbb62bc4f5021beb0ae4800b021ae78f60b474705e0a3e27c71df6c252"]
    },

  },
  etherscan: {
    apiKey: {
      arbitrumSepolia: "KR5VFMG3BRIYWPUCQH3Y1WXR79DNRFNCT2",
      ethereumMainnet: "6BZSPR2H45E9X72Y7Z5TFFI3BBZRQ7MUKV"
    },
    customChains: [
      {
        network: "arbitrumSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api", 
          browserURL: "https://testnet.arbiscan.io/"
        }
      },
      {
        network: "ethereumMainnet",
        chainId: 1,
        urls: {
          apiURL: "https://nova-sequencer.arbitrum.io/rpc", 
          browserURL: "https://etherscan.io/"
        }
      }
    ]
  }
};

















// const { network } = require("hardhat");

// // require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-ethers");
// require("@nomiclabs/hardhat-etherscan");

// module.exports = {
//   solidity: "0.8.4",
//   networks: {
//     arbitrumSepolia: {
//       url: "https://arb-sepolia.g.alchemy.com/v2/zOqi5xn38BylY0ZbjEWNiK89EU7xnORO",
//       accounts: [`0x7f780ccbb62bc4f5021beb0ae4800b021ae78f60b474705e0a3e27c71df6c252`]
//     },
//     EthereumMainet: {
//       url: "https://eth-mainnet.g.alchemy.com/v2/FOfDIuUV7p5hyZ4srKkRrAXb4pSI0ZCt",
//       accounts: [`0x7f780ccbb62bc4f5021beb0ae4800b021ae78f60b474705e0a3e27c71df6c252`]
//     }
//   },
//   etherscan: {
//     apiKey: {
//       // mainnet: ETHERSCAN_API_KEY,
//       // arbitrumOne: ARBISCAN_API_KEY,
//       // avalanche: SNOWTRACE_API_KEY,
//       // bsc: BSCSCAN_API_KEY,
//       // polygon: POLYGONSCAN_API_KEY,
//       // optimisticEthereum: OPTIMISTIC_API_KEY,
//       // base: BASESCAN_API_KEY,
//       arbitrumSepolia:"KR5VFMG3BRIYWPUCQH3Y1WXR79DNRFNCT2"
//     },
//     etherscan: {
//       apiKey: {
//         // mainnet: ETHERSCAN_API_KEY,
//         // arbitrumOne: ARBISCAN_API_KEY,
//         // avalanche: SNOWTRACE_API_KEY,
//         // bsc: BSCSCAN_API_KEY,
//         // polygon: POLYGONSCAN_API_KEY,
//         arbitrumSepolia: "KR5VFMG3BRIYWPUCQH3Y1WXR79DNRFNCT2",
//         // optimisticEthereum: OPTIMISTIC_API_KEY,
//         // base: BASESCAN_API_KEY,
//       },
//       customChains: [
//         // {
//         //   network: "base",
//         //   chainId: 8453,
//         //   urls: {
//         //     apiURL: "https://api.basescan.org/api",
//         //     browserURL: "https://basescan.org"
//         //   },
//         {
//           network: "arbitrumSepolia",
//           chainId: 421614,
//           urls: {
//             apiURL: "https://arb-sepolia.g.alchemy.com/v2/api",
//             browserURL: "https://sepolia.arbiscan.io/"
//           }
        
//         }
//       ]
//     },
//   },
// };
