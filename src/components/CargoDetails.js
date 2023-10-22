import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';



function CargoDetails() {
  const { cargoId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleBook = (e) => {
    e.preventDefault();
    // Implement booking logic here
  };



  return (
    <div className="text-center mt-8">
      {selectedImage && (
        <div>
          <img src={selectedImage} alt="Selected Cargo Image" className="mb-4" />
        </div>
      )}
      <input
        type="file"
        accept="image/*"
        id="image-upload"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <Link to="/" className="text-4xl text-blue-400 absolute top-2 left-2">
        &lt; {/* Use a single "<" character */}
      </Link>
      <div className="flex justify-center">
        <label
          htmlFor="image-upload"
          className="text-black border border-black p-4 rounded-md cursor-pointer inline-block mb-4 shadow w-64 h-24 flex items-center justify-center text-xl"
          style={{
            fontSize: '1.5rem',
          }}
        >
          Upload or Drag & Drop an Image of Your Luggage Here
        </label>
      </div>
      <br />
      <button
        onClick={handleBook}
        className="bg-blue-400 text-white p-4 rounded-full cursor-pointer inline-block"
        style={{ fontSize: '1.5rem', width: '200px' }}
      >
        Book
      </button>
    </div>
  );
}

export default CargoDetails;
