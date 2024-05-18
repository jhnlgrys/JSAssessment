# NFT Minting System

This project is a simple NFT (Non-Fungible Token) minting system implemented in JavaScript. It allows you to mint new NFTs, list all minted NFTs, and get the total supply of minted NFTs.


## Overview

The script defines three main functions:

1. 'mintNFT(name, description, imageURL)' - Creates and stores NFT objects.
2. 'listNFTs()' - Iterates and prints NFT metadata.
3. 'getTotalSupply()' - Returns the number of minted NFTs.

## Usage

### Variables
'mintedNFTs': An array to hold the minted NFT objects.

### Functions
'mintNFT(name, description, imageURL)'
This function mints a new NFT and stores it in the 'mintedNFTs' array.

#### Parameters:

'name': A string representing the name of the NFT.

'description': A string providing a description of the NFT.

'imageURL': A string containing the URL to the NFT's image.

## Example Usage

Below is an example of how to use the script to mint NFTs, list them, and get the total supply.

```javascript
// Minting NFTs
mintNFT("Cool Cat", "A grumpy but adorable cat", "https://thisisanexample/cat.png");
mintNFT("Space Traveler", "Lost but determined astronaut", "https://alsoanexample/astronaut.jpg");

// Display total number of NFTs minted
console.log("Total NFTs Minted:", getTotalSupply());

// List all minted NFTs
listNFTs();
```
## Example Output

```javascript
Total NFTs Minted: 2
Your Minted NFTs:
Name: Cool Cat
Description: A grumpy but adorable cat
Image URL: https://thisisanexample/cat.png
---
Name: Space Traveler
Description: Lost but determined astronaut
Image URL: https://alsoanexample/astronaut.jpg
---
```

## Authors

Reyes, John Luigi L.

National Teachers College

## License

This project is licensed under the MIT License. See the LICENSE file for details.
