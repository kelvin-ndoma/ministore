// components/ProductList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch all products
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <div className="container mx-auto mt-16 sm:mt-20">
      <div className="mb-4 sm:mb-6">
        <h1 className="text-3xl font-semibold sm:mt-6">Explore Our Products</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-4">
        {products.map((product) => (
          <div key={product.id} className="mb-8 border border-gray-300 p-4 rounded-md">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-auto rounded-md"
            />
            <h2 className="text-md font-semibold mt-2">{product.title}</h2>
            <p className="text-gray-600">${product.price.toFixed(2)}</p>
            <Link to={`/product-details/${product.id}`}>
              <button
                className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-full hover:bg-blue-700"
              >
                Show Details
              </button>
            </Link>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white mt-2 px-4 py-2 rounded-full hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
