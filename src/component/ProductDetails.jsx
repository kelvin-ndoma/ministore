// components/ProductDetails.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Fetch the details of a specific product by ID
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-20 sm:mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto md:w-1/2 lg:w-1/3 max-h-96 rounded-md"
        />
        <div className="ml-4 md:w-1/2 lg:w-2/3 mt-4 md:mt-0">
          <h1 className="text-3xl font-semibold mb-2">{product.title}</h1>
          <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-800">{product.description}</p>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white mt-4 px-4 py-2 rounded-full hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
