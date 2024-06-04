import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RestaurantList() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    axios.get('/api/restaurants/')
      .then(response => {
        setRestaurants(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Restaurants</h1>
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Name</th>
            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Address</th>
            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Telephone</th>
            <th className="w-1/4 py-3 px-4 uppercase font-semibold text-sm">Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map(restaurant => (
            <tr key={restaurant._id} className="bg-gray-100 border-b border-gray-200 hover:bg-gray-200">
              <td className="py-3 px-4">{restaurant.name}</td>
              <td className="py-3 px-4">{restaurant.address}</td>
              <td className="py-3 px-4">{restaurant.telephone}</td>
              <td className="py-3 px-4">
                <div className="flex space-x-2">
                  <Link to={`/restaurants/${restaurant._id}`} className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">View</Link>
                  <Link to={`/restaurants/edit/${restaurant._id}`} className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Edit</Link>
                  <Link to={`/restaurants/delete/${restaurant._id}`} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">Delete</Link>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RestaurantList;
