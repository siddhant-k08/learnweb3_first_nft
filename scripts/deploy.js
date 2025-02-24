
//ethers.js comes built in to hardhat
//ethers.js is a well known and popular library to work with Ethereum

//import the ethers

const hre = require("hardhat");
async function main(){

    //1.Now the first step is that tell the script that we want to deploy the contract 'NFT.sol'
    const contract = await hre.ethers.getContractFactory("NFT");

    //2.deploy it
    const deployedContract = await contract.deploy();
    //2.1 wait for deployment to finish
    await deployedContract.waitForDeployment();

    //3.print the address of the deployed contract
    console.log("NFT contract is deployed to: ", deployedContract.target);
}

main()
.then(() => process.exit(0))
.catch((error) => {
    console.error(error);
    process.exit(1);
});