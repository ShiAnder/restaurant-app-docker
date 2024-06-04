import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function RestaurantDetails() {
  const { id } = useParams();
  const [restaurant, setRestaurant] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/api/restaurants/${id}`)
      .then(response => {
        setRestaurant(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [id]);

  if (!restaurant) {
    return <div className="text-center py-6">Loading...</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">{restaurant.name}</h1>
      <p className="text-gray-700 mb-2"><strong className="font-semibold">Address:</strong> {restaurant.address}</p>
      <p className="text-gray-700"><strong className="font-semibold">Telephone:</strong> {restaurant.telephone}</p>
      <button 
        onClick={() => navigate('/')} 
        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
        Back to List
      </button>
    </div>
  );
}

export default RestaurantDetails;
