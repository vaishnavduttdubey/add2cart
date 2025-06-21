import React, { useState } from 'react';
import Navbar from './component/Navbar'; // ✅ Only keep this
import '@fortawesome/fontawesome-free/css/all.min.css';
import Product from './component/Product'; // ✅ Also update this

const App = () => {
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    setCart([...cart, item]); // Adds item to cart
    console.log("Cart Items:", cart);
  };

  return (
    <div>
      <Navbar size={cart.length} />
      <Product handleClick={handleClick} />
    </div>
  );
};

export default App;
