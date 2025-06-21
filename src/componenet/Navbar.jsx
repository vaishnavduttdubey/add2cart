import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Styles/Navbar.css'; // Again, ensure spelling/case matches your directory

const Navbar = ({ size }) => {
  return (
    <nav>
      <div className="nav-box">
        <span className="bolder">VSNV Stores</span>
        <div className="cart">
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
