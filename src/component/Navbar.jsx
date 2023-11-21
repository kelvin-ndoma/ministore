// components/Navbar.js
import React, { useState } from 'react';
import { FaBars, FaTimes, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../assets/logo (1).png';

const Navbar = ({ cartItemCount }) => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [showAddedToCart, setShowAddedToCart] = useState(false);

  const handleAddToCart = () => {
    setShowAddedToCart(true);
    setTimeout(() => {
      setShowAddedToCart(false);
    }, 2000); // Show the added to cart message for 2 seconds
  };

  return (
    <div className='fixed top-0 w-full h-[80px] flex justify-between items-center px-4 bg-white text-black'>
      <div>
        <img src={logo} alt='logo' style={{ width: '50px' }} />
      </div>

      <ul className='hidden md:flex space-x-4'>
        <li>
          <Link to='/'>Product List</Link>
        </li>
        <li>
          {/* Display the cart icon with item count */}
          <Link to='/cart' onClick={handleAddToCart} className='relative'>
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <span className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-1 py-0.5 rounded-full text-xs'>
                {cartItemCount}
              </span>
            )}
          </Link>
        </li>
        <li>
          <Link to='/checkout'>Checkout</Link>
        </li>
        <li>
          <Link to='/order-history'>Order History</Link>
        </li>
      </ul>

      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-white'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/'>
            Product List
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {/* Display the cart icon with item count */}
          <Link onClick={() => { handleAddToCart(); handleClick(); }} to='/cart' className='relative'>
            <FaShoppingCart />
            {cartItemCount > 0 && (
              <span className='absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white px-1 py-0.5 rounded-full text-xs'>
                {cartItemCount}
              </span>
            )}
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/checkout'>
            Checkout
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='/order-history'>
            Order History
          </Link>
        </li>
      </ul>

      {/* Display a message when an item is added to the cart */}
      {showAddedToCart && (
        <div className='fixed top-10 right-4 bg-green-500 text-white px-2 py-1 rounded-md'>
          Item added to cart!
        </div>
      )}
    </div>
  );
};

export default Navbar;
