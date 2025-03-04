import React, { useState } from 'react';
import { useCart } from './CartContext'; // Import useCart to access the cart state
import { Link } from 'react-router-dom'; // Import Link for navigation
import Modal from './Modal'; // Import the Modal component

function CartPage() {
  const { cart, removeFromCart, resetCart } = useCart(); // Get cart, removeFromCart, and resetCart from CartContext
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility for checkout confirmation
  const [orderCompleted, setOrderCompleted] = useState(false); // State to manage the "order completed" modal
  
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Open the modal when user clicks "Proceed to Checkout"
  const handleProceedToCheckout = () => {
    setIsModalOpen(true); // Show the modal to confirm checkout
  };

  // Close the modal (e.g., cancel action)
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  // Proceed to checkout logic (handle what happens when user confirms)
  const handleOrderCompletion = () => {
    setIsModalOpen(false); // Close the checkout modal
    resetCart(); // Reset the cart after order completion
    setOrderCompleted(true); // Show the "order completed" confirmation modal
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Cart</h2>

      {/* If the cart is empty */}
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          {/* List of Cart Items */}
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-4 border-b border-gray-300">
                {/* Item Image and Info */}
                <div className="flex items-center">
                  <img src={item.image} alt={item.title} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p>Quantity: {item.quantity}</p>
                    <p className="text-sm text-gray-600">Price: ${item.price}</p>
                  </div>
                </div>

                {/* Price and Remove button */}
                <div className="text-right">
                  <p className="text-lg font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                  {/* Remove from cart button */}
                  <button
                    onClick={() => removeFromCart(item.id)} // Call removeFromCart on click
                    className="text-red-500 font-semibold ml-4 cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Total Price and Checkout Button */}
          <div className="mt-6 flex justify-between items-center">
            <h3 className="text-2xl font-semibold">Total: ${totalPrice.toFixed(2)}</h3>
            <button 
              onClick={handleProceedToCheckout}
              className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-all"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}

      {/* Modal for Proceed to Checkout */}
      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onProceed={handleOrderCompletion}
        title="Proceed to Checkout"
        message="Are you sure you want to proceed to checkout? Please confirm before continuing with your order."
        actionText="Yes, Proceed"
        cancelText="Cancel"
      />

      {/* Modal for Order Completion */}
      {orderCompleted && (
        <Modal
          isOpen={orderCompleted}
          onClose={handleCloseModal} // Close the modal
          title="Order Completed"
          message="Thank you for your order! Your cart has been reset."
          actionText="Close"
          cancelText=""
        />
      )}
      
      {/* Link to home page after the order is completed */}
      {orderCompleted && (
        <Link to="/" className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50">
          <div className="bg-black bg-opacity-50 w-full h-full flex justify-center items-center">
            <div className="bg-white p-6 rounded-md w-1/3 text-center">
              <h3 className="text-xl font-semibold mb-4">Order Completed</h3>
              <p>Your order has been successfully placed. You will be redirected to the homepage.</p>
              <Link 
                to="/" 
                className="mt-4 text-teal-500 hover:text-teal-700 underline"
              >
                Close and Go Home
              </Link>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}

export default CartPage;
