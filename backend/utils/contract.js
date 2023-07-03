const ethers = require('ethers')
const address = require('../../src/abis/contractAddress.json')
const abi = require('../../src/abis/contracts/Contract.sol/Contract.json')
const { add } = require('../controllers/salesController')

const contractAddress = address.address
const contractAbi = abi.abi

const ListenContract = async () => {
    const provider = new ethers.providers.InfuraProvider("goerli");
    const contract = new ethers.Contract(contractAddress, contractAbi, provider)

    if(contract) {
        console.log('Listening Contracts');
        contract.on('Saled', async (tokenIds, amounts, totalAcres, totalPrice, to, time) => {
            console.log(tokenIds, amounts, totalAcres, totalPrice, to, time);
            
            const amount = parseInt(totalAcres._hex);
            console.log(amount)
            const price = Number(ethers.utils.formatEther(totalPrice._hex));
            console.log(price)
            const timestamp = new Date(time.toNumber()).getTime()
            const ts = new Date(time.toNumber())
            console.log(timestamp, ts)
            await add(to, amount, price, timestamp)
        });
    }
}

module.exports = { ListenContract };