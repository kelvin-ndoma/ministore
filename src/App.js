import React, { useState, useEffect } from 'react';
import Navbar from "./component/Navbar";
import Cart from "./component/Cart";
import Checkout from "./component/Checkout";
import OrderHistory from "./component/OrderHistory";
import ProductDetails from "./component/ProductDetails";
import ProductList from "./component/ProductList"

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fetch products from FakeStoreAPI
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const handleCheckout = (order) => {
    setOrders([...orders, order]);
    setCartItems([]); // Clear cart after successful checkout
  };

  return (
    <Router>
      <div>
        <Navbar cartItemCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<ProductList products={products} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} onCheckout={handleCheckout} />} />
          <Route path="/order-history" element={<OrderHistory orders={orders} />} />
          <Route path="/products/:id" element={<ProductDetails products={products} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
