pragma solidity ^0.8.4; //SPDX-License-Identifier: UNLICENSED

import "hardhat/console.sol"; //for console logs in contract

contract WaveGateway {
    uint256 selams;

    constructor() { //after initialize contract, will print out
        console.log("I'm smart and contract");
    } 
    function elsalla() public {
        selams += 1;
        console.log("%s has waved!", msg.sender);        
    }
    function toplamelsallama() public view returns (uint256) {
        console.log("Toplam %d selam var :)", selams);
        return selams;
    }
} 