// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract CargoMarketplace is ERC721Enumerable {
    struct CargoListing {
        string cargoType;
        string departureCity;
        string arrivalCity;
    }

    CargoListing[] public cargoListings;

    constructor() ERC721("CargoNFT", "CARGO") {}

    function createCargoListing(string memory _cargoType, string memory _departureCity, string memory _arrivalCity) public {
        CargoListing memory newCargo = CargoListing(_cargoType, _departureCity, _arrivalCity);
        uint256 tokenId = cargoListings.length;
        cargoListings.push(newCargo);
        _mint(msg.sender, tokenId);
    }
}
