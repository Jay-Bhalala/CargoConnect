import React from 'react';
import svgIcon from '../img/cargo-truck-delivery-svgrepo-com.svg'

function HomeHero() {
  return (
    <div className="bg-blue-400 p-8 flex items-center justify-center">
      {/* Left side with SVG */}
      <div className="w-1/3">
        <img
          src={svgIcon}
          alt="SVG Image"
          className="w-64 h-64"
        />
      </div>

      {/* Right side with description */}
      <div className="w-1/4 p-4">
        <h2 className="text-2xl font-bold mb-4 font-mono">All about CargoConnect</h2>
        <p className="text-gray-200">
        CargoConnect is a revolutionary cargo marketplace platform designed to optimize cargo space usage, promote sustainability, and enhance cost-efficiency in the transportation industry.
        </p>
      </div>
    </div>
  );
}

export default HomeHero;
