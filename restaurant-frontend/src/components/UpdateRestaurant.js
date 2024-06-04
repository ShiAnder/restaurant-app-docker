import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function UpdateRestaurant() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [telephone, setTelephone] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/restaurants/${id}`)
      .then(response => {
        setName(response.data.name);
        setAddress(response.data.address);
        setTelephone(response.data.telephone);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const restaurant = { name, address, telephone };
    axios.put(`http://localhost:3000/api/restaurants/${id}`, restaurant)
      .then(() => {
        alert("Restaurant updated successfully");
        navigate('/');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">Update Restaurant</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700">Name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Address</label>
          <input 
            type="text" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-gray-700">Telephone</label>
          <input 
            type="text" 
            value={telephone} 
            onChange={(e) => setTelephone(e.target.value)} 
            required 
            className="w-full mt-1 p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
          Update
        </button>
      </form>

      <button 
        onClick={() => navigate('/')} 
        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
        Back to List
      </button>
      
    </div>
  );
}

export default UpdateRestaurant;
