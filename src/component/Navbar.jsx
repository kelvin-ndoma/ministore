import React, { useState } from 'react';
import { FaBars, FaTimes, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BsFacebook, BsGithub } from 'react-icons/bs';
import logo from "../assets/logo (1).png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    // navbar styled
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-white text-black'>
      <div>
        <img src={logo} alt="logo" style={{ width: '50px' }} />
      </div>
      {/* menu for large screens*/}
      <ul className='hidden md:flex space-x-4'>
        <li>
          <Link to="/">Product List</Link>
        </li>
        <li>
          <Link to="/product-details">Product Details</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/checkout">Checkout</Link>
        </li>
        <li>
          <Link to="/order-history">Order History</Link>
        </li>
      </ul>

      {/* humberger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center text-white'}>
        <li className='py-6 text-4xl' ><Link onClick={handleClick} to="/">Product List</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="/product-details">Product Details</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="/cart">Cart</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to="/checkout">Checkout</Link></li>
        <li className='py-6 text-4xl'> <Link onClick={handleClick} to="/order-history">Order History</Link></li>
      </ul>

      {/* social media icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-black' href='/'>Linkedin <FaLinkedin size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a className='flex justify-between items-center w-full text-black' href='/'>Instagram <FaInstagram size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-skyblue-600'>
            <a className='flex justify-between items-center w-full text-black' href='/'>Facebook <BsFacebook size={30} /></a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-black' href='/'>Github <BsGithub size={30} /></a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
