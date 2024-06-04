import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const DeleteRestaurant = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    axios.get(`/api/restaurants/${id}`)
      .then(response => {
        setRestaurant(response.data);
      })
      .catch(error => console.error(error));
  }, [id]);

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this restaurant?");
    if (confirmDelete) {
      axios.delete(`/api/restaurants/${id}`)
        .then(response => navigate('/'))
        .catch(error => console.error(error));
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">Delete Restaurant</h1>
      {restaurant && (
        <div>
          <p className="mb-2"><strong className="font-semibold">Name:</strong> {restaurant.name}</p>
          <p className="mb-2"><strong className="font-semibold">Address:</strong> {restaurant.address}</p>
          <p className="mb-4"><strong className="font-semibold">Telephone:</strong> {restaurant.telephone}</p>
          <button onClick={handleDelete} className="w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
            Delete
          </button>
        </div>
      )}

      <button 
        onClick={() => navigate('/')} 
        className="mt-4 w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
        Back to List
      </button>
    </div>
  );
};

export default DeleteRestaurant;
