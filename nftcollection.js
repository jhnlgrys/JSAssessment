let mintedNFTs = [];

function mintNFT(name, description, imageURL) {
  const nft = {
    name: name,
    description: description,
    imageURL: imageURL,
  };

  mintedNFTs.push(nft);
}

function listNFTs() {
  console.log("Your Minted NFTs:");
  for (const nft of mintedNFTs) {
    console.log("Name:", nft.name);
    console.log("Description:", nft.description);
    console.log("Image URL:", nft.imageURL);
    console.log("---");
  }
}

function getTotalSupply() {
  return mintedNFTs.length;
}

mintNFT("Cool Cat", "A grumpy but adorable cat", "https://thisisanexample/cat.png");
mintNFT("Space Traveler", "Lost but determined astronaut", "https://alsoanexample/astronaut.jpg");

console.log("Total NFTs Minted:", getTotalSupply());
listNFTs();
