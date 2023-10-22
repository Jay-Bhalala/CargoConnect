import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Plot from 'react-plotly.js';
import axios from 'axios';
import { storage } from '../config/firebase';

function CargoDetails() {
  const { cargoId } = useParams();
  const [selectedImage, setSelectedImage] = useState(null);
  const [plotly3DModel, setPlotly3DModel] = useState(null);

  const handleProcessImage = (imageUrl) => {
    const baseUrl = 'http://localhost:5000/process_image'; // Replace with your Flask API URL

    axios.get(baseUrl, { params: { imageUrl } })
      .then((response) => {
        console.log(response);
        setPlotly3DModel(response.data.plotly_3d_model);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
    const storageRef = storage.ref('images/' + file.name);
    storageRef.put(file).then((snapshot) => {
      console.log('File uploaded to Firebase Storage');
      storageRef.getDownloadURL().then((url) => {
        handleProcessImage(url);
      }).catch((error) => {
        console.error('Error getting download URL:', error);
      });
    }).catch((error) => {
      console.error('Error uploading file to Firebase Storage:', error);
    });
  };

  const handleBook = (e) => {
    e.preventDefault();
    // Implement booking logic here
  };

  return (
    <div className="text-center mt-8">
      <input
        type="file"
        accept="image/*"
        id="image-upload"
        onChange={handleImageChange}
        style={{ display: 'none' }}
      />
      <Link to="/" className="text-4xl text-blue-400 absolute top-2 left-2">
        &lt;
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
      <div>
        <p>{selectedImage ? 'Image uploaded' : 'No image uploaded'}</p>
      </div>
      {plotly3DModel && (
        <Plot data={plotly3DModel.data} layout={plotly3DModel.layout} />
      )}
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
