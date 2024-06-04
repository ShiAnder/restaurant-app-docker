import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RestaurantList from "./components/RestaurantList";
import CreateRestaurant from "./components/CreateRestaurant";
import RestaurantDetails from "./components/RestaurantDetails";
import UpdateRestaurant from "./components/UpdateRestaurant";
import DeleteRestaurant from "./components/DeleteRestaurant";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<RestaurantList />} />
          <Route path="/create" element={<CreateRestaurant />} />
          <Route path="/restaurants/:id" element={<RestaurantDetails />} />
          <Route path="/restaurants/edit/:id" element={<UpdateRestaurant />} />
          <Route path="/restaurants/delete/:id" element={<DeleteRestaurant />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
