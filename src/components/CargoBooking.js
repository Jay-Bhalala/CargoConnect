import React, { useState } from 'react';

function CargoBooking() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleBookCargo = () => {
    // Implement your booking logic here
    // You can send the cargo details and the selected image to the server
    // Once the booking is complete, you can redirect the user to another page
  };

  return (
    <div>
      <h2>Cargo Booking</h2>
      <input type="file" onChange={handleImageUpload} />
      <button onClick={handleBookCargo}>Book Cargo</button>
    </div>
  );
}

export default CargoBooking;