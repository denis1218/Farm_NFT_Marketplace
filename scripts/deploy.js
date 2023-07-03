const { ethers } = require('hardhat')
const fs = require('fs')

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const base_uri = 'http://app.judicialasset.com/api/metadata'
  const Contract = await ethers.getContractFactory('Contract')
  const contract = await Contract.deploy('Aurora Farm NFT', 'AFN', base_uri)
  
  await contract.deployed()

  const [signer, user] = await ethers.getSigners();

  const address = JSON.stringify({ address: contract.address }, null, 4)
  fs.writeFile('./src/abis/contractAddress.json', address, 'utf8', (err) => {
    if (err) {
      console.error(err)
      return
    }
    console.log('Deployed contract address', contract.address)
  })
  
  const amount = ethers.utils.parseEther('0.5')

  await sleep(20000);
  await contract.mint(1, 150);
  await sleep(10000);
  console.log("Successfully minted");
  await contract.mint(2, 100);
  await sleep(10000);
  console.log("Successfully minted");
  await contract.mint(5, 200);
  await sleep(10000);
  console.log("Successfully minted");
  await contract.mint(10, 200);
  await sleep(10000);
  console.log("Successfully minted");
  await contract.mint(20, 200);
  await sleep(10000);
  console.log("Successfully minted");
  await contract.mint(50, 150);
  await sleep(10000);
  console.log("Successfully minted");
  await contract.mint(100, 100);
  await sleep(10000);
  console.log("Successfully minted");
  await contract.mint(200, 50);
  await sleep(10000);
  console.log("Successfully minted");
  await contract.mint(500, 40);
  await sleep(10000);
  console.log("Successfully minted");
  await contract.mint(1000, 20);
  await sleep(10000);
  
  await contract.setApprovalForAll(contract.address, true);

  console.log("Successfully minted");
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})