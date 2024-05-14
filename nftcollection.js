// Create a variable to hold a number of NFTs (Array is a suitable choice)
let mintedNFTs = [];

// mintNFT function to create and store NFT objects
function mintNFT(name, description, imageURL) {
  // Create an object to hold the NFT's metadata
  const nft = {
    name: name,
    description: description,
    imageURL: imageURL,
  };

  // Add the newly minted NFT object to the mintedNFTs array
  mintedNFTs.push(nft);
}

// listNFTs function to iterate and print NFT metadata
function listNFTs() {
  console.log("Your Minted NFTs:");
  for (const nft of mintedNFTs) {
    console.log("Name:", nft.name);
    console.log("Description:", nft.description);
    console.log("Image URL:", nft.imageURL);
    console.log("---");
  }
}

// getTotalSupply function to return the number of minted NFTs
function getTotalSupply() {
  return mintedNFTs.length;
}

// Example Usage
mintNFT("Cool Cat", "A grumpy but adorable cat", "https://thisisanexample/cat.png");
mintNFT("Space Traveler", "Lost but determined astronaut", "https://alsoanexample/astronaut.jpg");

console.log("Total NFTs Minted:", getTotalSupply());
listNFTs();