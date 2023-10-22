const Web3 = require('web3');
const contractAbi = [...]; // ABI of your smart contract
const contractAddress = '0x...'; // Your contract address
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_KEY'); // Use your Infura project's key

const cargoContract = new web3.eth.Contract(contractAbi, contractAddress);

// Create a cargo listing
async function createCargoListing(cargoType, departureCity, arrivalCity) {
    const accounts = await web3.eth.getAccounts();
    await cargoContract.methods.createCargoListing(cargoType, departureCity, arrivalCity)
        .send({ from: accounts[0] });
    console.log('Cargo listing created.');
}

// Call createCargoListing
createCargoListing('Furniture', 'New York', 'Los Angeles');
