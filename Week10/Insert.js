import React, { useState } from 'react';
import axios from 'axios';
const Insert = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    img : ''
    // Add more input fields as needed
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    // Set value for the _id field to the collection length
    const newValue =  name === 'price' ? parseInt(value) || '' : value;

    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: newValue
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send data to the API endpoint
      const response = await axios.post('http://127.0.0.1:5000/api/products', formData);
      console.log('Response:', response.data);
      // Reset input fields after successful submission
      setFormData({
        name: '',
        price: '',
        img: ''
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };
  

  return (
    <div>
      <h1>Post</h1>
      <p>name</p>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <p>Price</p>
      <input
        type="text"
        name="price"
        value={formData.price}
        onChange={handleChange}
      />
      <p>img</p>
      <input
        type="text"
        name="img"
        value={formData.img}
        onChange={handleChange}
      />
      {/* Add more input fields as needed */}
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Insert;
