
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ProductModal = () => {
    const [showModal, setShowModal] = useState(false);
  const [formData, setformData] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
    category: ''
  });
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer);

  const handleSave = async () => {
    const response = await axios.post('https://crudcrud.com/api/54b7434fe7b8437b854d954f91ddf9c4/products', formData);
    dispatch({ type: 'ADD_PRODUCT', payload: response.data });
    setformData({
      name: '',
      description: '',
      price: '',
      image: null,
      category: ''
    });
  };

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setformData({ ...formData, image: e.target.files[0] });
    } else {
      setformData({ ...formData, [e.target.name]: e.target.value });
    }
  };


  return (
    <div>
    <button className="open-modal-btn" onClick={() => setShowModal(true)}>Create Product</button>
    {showModal && (
      <div className="modal">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="modal-input"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product Description"
          className="modal-input"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Product Price"
          className="modal-input"
        />
        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleChange}
          className="modal-input"
        />
        <select value={formData.category} onChange={handleChange} className="modal-input">
          <option value="">Select Category</option>
          {categories.map((category, index) => (
            <option key={index} value={category._id}>{category.name}</option>
          ))}
        </select>
        <div className="modal-buttons">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
        </div>
      </div>
    )}
  </div>
);
};

export default ProductModal;
