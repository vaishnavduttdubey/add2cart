import React, { useState } from 'react';
import Navbar from './componenet/Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Product from './componenet/Product';

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
