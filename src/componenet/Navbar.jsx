import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css'


const Navbar = () => {
  return (
    <nav>
      <div className="nav-box">
        <span>VSNV Stores</span>
        <div className="cart">
          <span>
            <i className="fas fa-cart-plus"></i>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
