import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productReducer);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          'https://crudcrud.com/api/54b7434fe7b8437b854d954f91ddf9c4/products'
        );
        dispatch({ type: 'FETCH_PRODUCTS', payload: response.data });
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]);

  const handleDeleteProduct = async (productId) => {
   
      await axios.delete(
        `https://crudcrud.com/api/54b7434fe7b8437b854d954f91ddf9c4/products/${productId}`
      );
      dispatch({ type: 'DELETE_PRODUCT', payload: productId });
   
  };

  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="product-items">
        {products.map((product) => (
          <div key={product._id} className="product-item">

             <h1>{product.name}</h1>
            <p>{product.category}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
            <button onClick={() => handleDeleteProduct(product._id)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

