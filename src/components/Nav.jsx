// Nav.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext'; // Import useCart to access cart state

function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cart } = useCart();  // Get the cart state from CartContext

  // Calculate total quantity of items in the cart
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="sticky top-5 w-[80%] m-auto backdrop-blur-[5px] z-[10] border-gray-400 border rounded-[0.7rem] bg-transparent flex justify-between items-center py-5 px-10 text-white">
      <h1 className="text-3xl font-extrabold text-[#004643] max-md:text-2xl max-sm:text-lg">ShoPpP</h1>

      <div className="md:hidden">
        <button className="text-white focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div className={`fixed top-[8rem] left-0 w-full bg-gray-800 rounded-md text-white flex flex-col items-center space-y-5 py-5 transition-transform transform ${menuOpen ? 'translate-y-0' : '-translate-y-[30rem]'} md:hidden`}>
        <Link to="/" className="text-lg font-semibold hover:text-yellow-500 transition-all">Home</Link>
        <Link to="/shop" className="text-lg font-semibold hover:text-yellow-500 transition-all">Shop</Link>
        <Link to="/about" className="text-lg font-semibold hover:text-yellow-500 transition-all">About</Link>
        <Link to="/cart" className="text-lg font-semibold hover:text-yellow-500 transition-all"><i className="fa-solid fa-cart-shopping cursor-pointer"></i></Link>
      </div>

      <ul className="hidden md:flex space-x-5 items-center">
        <li className="text-lg text-[#004643] font-semibold hover:text-yellow-500 transition-all"><Link to="/">Home</Link></li>
        <li className="text-lg text-[#004643] font-semibold hover:text-yellow-500 transition-all"><Link to="/shop">Shop</Link></li>
        <li className="text-lg text-[#004643] font-semibold hover:text-yellow-500 transition-all"><Link to="/about">About</Link></li>
        <li>
          <Link to="/cart">
            <i className="text-[#F6BE9A] fa-solid fa-cart-shopping cursor-pointer"></i>
            {/* Display the total quantity in the cart icon */}
            {cartQuantity > 0 && (
              <span className="bg-red-400 rounded-full text-sm px-1  top-0 right-0">
                {cartQuantity}
              </span>
            )}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
