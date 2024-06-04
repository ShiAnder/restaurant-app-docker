import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateRestaurant = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [telephone, setTelephone] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Use useNavigate hook for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post("/api/restaurants", { name, address, telephone });
      console.log("Restaurant created:", response.data);
      navigate("/"); // Navigate to the root URL after successful creation
    } catch (err) {
      setError(err.message);
      console.error("Error creating restaurant:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Restaurant</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Telephone:</label>
          <input
            type="text"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Create
        </button>
      </form>

      <button 
        onClick={() => navigate('/')} 
        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
        Back to List
      </button>
      
    </div>
  );
};

export default CreateRestaurant;
