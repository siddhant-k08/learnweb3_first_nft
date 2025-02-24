require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
//require("@nomiclabs/hardhat-waffle");
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks:{
    sepolia:{
        //How do we define which test network to use?
      url:process.env.ALCHEMY_API_KEY_URL,   //alchemy application url fetched from .env file
    //How do we define which account for deployment
     accounts:[process.env.PRIVATE_KEY],   //Our private key fetched from .env file 
    },
    
  }, 
};
