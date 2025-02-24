//SPDX-License-Identifier:MIT
pragma solidity ^0.8.11;

//Import the standard implementation of ERC721
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

//contract NFT _IS_ an ERC721 contract
contract NFT is ERC721{
    constructor() ERC721("Learnweb3's NFT","LERAN-NFT"){
        //Mint 5 NFT's to myself
        _mint(msg.sender,1);
        _mint(msg.sender,2);
        _mint(msg.sender,3);    
        _mint(msg.sender,4);
        _mint(msg.sender,5);
    }
} 
