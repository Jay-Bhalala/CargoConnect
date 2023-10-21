import React from 'react';

function MarketplaceSquares({ cargoListings }) {
  return (
    <div className="bg-gray-100 p-4 text-center">
      <h2 className="text-2xl font-bold mb-4">Cargo Listings</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mx-auto max-w-7xl">
        {cargoListings.map((listing, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-lg font-semibold mb-2">Listing {index + 1}</h3>
            <p class="text-gray-700">Departure Date: {listing.departureDate}</p>
            <p class="text-gray-700">Arrival Date: {listing.arrivalDate}</p>
            <p class="text-gray-700">Cargo Space: {listing.cargoSpace} cubic feet</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MarketplaceSquares;
