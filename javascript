import React, { useState } from 'react';

const FoodForm = () => {
  const [foodName, setFoodName] = useState('');
  const [foodType, setFoodType] = useState('');
  const [maxDeliveryTime, setMaxDeliveryTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="foodName">Food Name:</label>
      <input type="text" id="foodName" value={foodName} onChange={(e) => setFoodName(e.target.value)} />

      <label htmlFor="foodType">Food Type:</label>
      <select id="foodType" value={foodType} onChange={(e) => setFoodType(e.target.value)}>
        <option value="">--Please select an option--</option>
        <option value="Delicious Food">Delicious Food</option>
        <option value="Nutritious Food">Nutritious Food</option>
        <option value="Fast Food">Fast Food</option>
        <option value="Beverages">Beverages</option>
        <option value="Desserts">Desserts</option>
      </select>

      <label htmlFor="maxDeliveryTime">Max Delivery Time (in minutes):</label>
      <input type="number" id="maxDeliveryTime" value={maxDeliveryTime} onChange={(e) => setMaxDeliveryTime(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FoodForm;
