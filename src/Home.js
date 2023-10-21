import React from 'react';
import Navbar from './components/navbar';
import HomeHero from './components/HomeHero';
import MarketplaceSquares from './components/MarketplaceSquares';

function Home(props) {
  // Sample cargo listings data
  const cargoListings = [
    {
      departureDate: '2023-11-01',
      arrivalDate: '2023-11-10',
      cargoSpace: 1000,
    },
    {
      departureDate: '2023-11-15',
      arrivalDate: '2023-11-25',
      cargoSpace: 800,
    },
    {
      departureDate: '2023-12-05',
      arrivalDate: '2023-12-15',
      cargoSpace: 1200,
    },
    // Add more listings
    {
      departureDate: '2024-01-01',
      arrivalDate: '2024-01-10',
      cargoSpace: 900,
    },
    {
      departureDate: '2024-01-15',
      arrivalDate: '2024-01-25',
      cargoSpace: 1100,
    },
    {
      departureDate: '2024-02-05',
      arrivalDate: '2024-02-15',
      cargoSpace: 750,
    },
    {
      departureDate: '2024-02-20',
      arrivalDate: '2024-03-01',
      cargoSpace: 950,
    },
    {
      departureDate: '2024-03-10',
      arrivalDate: '2024-03-20',
      cargoSpace: 800,
    },
    {
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
    </div>
  );
}

export default Home;