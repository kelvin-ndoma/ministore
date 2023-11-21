// components/Cart.js
import React from 'react';

const Cart = ({ cartItems, removeFromCart, incrementItem, decrementItem }) => {
  return (
    <div className="container mx-auto mt-10 flex-grow min-h-screen">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id} className="border p-4 mb-4 flex flex-col sm:flex-row items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 mr-4 mb-4 sm:mb-0" />
              <div className="flex-1">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-gray-700">${item.price.toFixed(2)}</p>
                <div className="flex items-center mt-2">
                  <button
                    onClick={() => decrementItem(item.id)}
                    className="bg-gray-300 text-gray-600 px-2 py-1 rounded-full"
                  >
                    -
                  </button>
                  <span className="mx-2">{item.quantity}</span>
                  <button
                    onClick={() => incrementItem(item.id)}
                    className="bg-gray-300 text-gray-600 px-2 py-1 rounded-full"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="bg-red-500 text-white mt-4 sm:mt-0 ml-4 px-3 py-1 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline-red"
              >
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-end">
            <div className="mt-4 text-right w-full sm:w-2/3 md:w-1/2 lg:w-1/3">
              <p className="text-lg">
                <span className="font-bold">Subtotal:</span> ${calculateSubtotal(cartItems).toFixed(2)}
              </p>
              <p className="text-lg">
                <span className="font-bold">Shipping:</span> $5.00
              </p>
              <p className="text-2xl font-bold mt-2">
                <span className="font-bold">Total:</span> ${(calculateSubtotal(cartItems) + 5).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const calculateSubtotal = (cartItems) => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
};

export default Cart;
