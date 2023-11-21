// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import ProductList from './component/ProductList';
import ProductDetails from './component/ProductDetails';
import Cart from './component/Cart';
import Checkout from './component/Checkout';
import OrderHistory from './component/OrderHistory';

const App = () => {
  // Load cart data from localStorage on component mount
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  const [cartItems, setCartItems] = useState(initialCart);

  useEffect(() => {
    // Save cart data to localStorage whenever it changes
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCartItems((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const incrementItem = (productId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementItem = (productId) => {
    setCartItems((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      )
    );
  };

  return (
    <Router>
      <div>
        <Navbar cartItemCount={cartItems.length} />
        <Routes>
          <Route path="/" element={<ProductList addToCart={addToCart} />} />
          <Route path="/product-details/:id" element={<ProductDetails addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={
              <Cart
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                incrementItem={incrementItem}
                decrementItem={decrementItem}
              />
            }
          />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />
          <Route path="/order-history" element={<OrderHistory />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
