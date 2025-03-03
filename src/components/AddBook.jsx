// src/components/AddBook.jsx

import React, { useState } from 'react';
import './AddBook.css'; // Import the CSS for styling

const AddBook = () => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    description: '',
    coverImage: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Book added successfully!');
    // Here, you can add logic to actually submit the data to your backend (if needed)
  };

  return (
    <div className="add-book-container">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit} className="add-book-form">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="author">Author</label>
        <input
          type="text"
          id="author"
          name="author"
          value={formData.author}
          onChange={handleChange}
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>

        <label htmlFor="coverImage">Cover Image URL</label>
        <input
          type="url"
          id="coverImage"
          name="coverImage"
          value={formData.coverImage}
          onChange={handleChange}
          required
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
