// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import OrderHistory from './component/OrderHistory';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    // Add the selected product to the cart
    setCartItems((prevCart) => [...prevCart, product]);
  };

  return (
    <Router>
      <div>
        <Navbar cartItemCount={cartItems.length} />
        <Routes>
          <Route
            path="/"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/product-details/:id"
            element={<ProductDetails />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route
            path="/checkout"
            element={<Checkout cartItems={cartItems} />}
          />
          <Route
            path="/order-history"
            element={<OrderHistory />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
