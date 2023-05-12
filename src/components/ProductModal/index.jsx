import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ProductModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: null,
    category: ''
  });
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categoryReducer);

  const handleSave = async () => {
    
      const response = await axios.post(
        'https://crudcrud.com/api/54b7434fe7b8437b854d954f91ddf9c4/products',
        formData
      );
      dispatch({ type: 'ADD_PRODUCT', payload: response.data });
      setFormData({
        name: '',
        description: '',
        price: '',
        image: null,
        category: ''
      });
      setShowModal(false);
    
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handleCategoryChange = (e) => {
    const selectedCategoryId = e.target.value;
    const selectedCategory = categories.find(
      (category) => category._id === selectedCategoryId
    );

    setFormData((prevFormData) => ({
      ...prevFormData,
      category: selectedCategory ? selectedCategory.name : ''
    }));
  };

  return (
    <div>
      <button className="open-modal-btn" onClick={() => setShowModal(true)}>
        Create Product
      </button>
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
          {formData.image && (
            <img
              src={URL.createObjectURL(formData.image)}
              alt="Selected Product"
              className="modal-image"
            />
          )}
          <select
            value={formData.category}
            onChange={handleCategoryChange}
            className="modal-input"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          <div className="modal-buttons">
            <button className="save-btn" onClick={handleSave}>
              Save
            </button>
            <button className="cancel-btn" onClick={() => setShowModal(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductModal;

