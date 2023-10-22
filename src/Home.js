import React from 'react';
import Navbar from './components/navbar';
import HomeHero from './components/HomeHero';
import MarketplaceSquares from './components/MarketplaceSquares';

function Home(props) {
  // Sample cargo listings data
  const cargoListings = [
    {
      departureCity: 'New York',
      arrivalCity: 'Los Angeles',
      departureDate: '2023-11-01',
      arrivalDate: '2023-11-10',
      cargoSpace: 1000,
    },
    {
      departureCity: 'Chicago',
      arrivalCity: 'Houston',
      departureDate: '2023-11-15',
      arrivalDate: '2023-11-25',
      cargoSpace: 800,
    },
    {
      departureCity: 'Miami',
      arrivalCity: 'Seattle',
      departureDate: '2023-12-05',
      arrivalDate: '2023-12-15',
      cargoSpace: 1200,
    },
    // Add more listings
    {
      departureCity: 'San Francisco',
      arrivalCity: 'Denver',
      departureDate: '2024-01-01',
      arrivalDate: '2024-01-10',
      cargoSpace: 900,
    },
    {
      departureCity: 'Atlanta',
      arrivalCity: 'Dallas',
      departureDate: '2024-01-15',
      arrivalDate: '2024-01-25',
      cargoSpace: 1100,
    },
    {
      departureCity: 'Boston',
      arrivalCity: 'Phoenix',
      departureDate: '2024-02-05',
      arrivalDate: '2024-02-15',
      cargoSpace: 750,
    },
    {
      departureCity: 'Detroit',
      arrivalCity: 'Las Vegas',
      departureDate: '2024-02-20',
      arrivalDate: '2024-03-01',
      cargoSpace: 950,
    },
    {
      departureCity: 'Houston',
      arrivalCity: 'New Orleans',
      departureDate: '2024-03-10',
      arrivalDate: '2024-03-20',
      cargoSpace: 800,
    },
    {
      departureCity: 'Portland',
      arrivalCity: 'San Diego',
      departureDate: '2024-03-25',
      arrivalDate: '2024-04-05',
      cargoSpace: 1300,
    },
  ];

  return (
    <div>
      <Navbar />
      <HomeHero />
      <MarketplaceSquares cargoListings={cargoListings} />
      <div className="bg-blue-400 text-white p-4 text-center">
        CargoConnect
      </div>
    </div>
  );
}

export default Home;
