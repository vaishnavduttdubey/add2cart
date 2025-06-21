import React from 'react';
import '../Styles/card.css'; // ✅ Use correct folder and file casing

const Card = ({ item, handleClick }) => {
  const { title, author, price, img } = item;

  return (
    <div className="card">
      <div className="image_box">
        <img src={img} alt={title} />
      </div>
      <div className="details">
        <p>{title}</p>
        <p>{author}</p>
        <p>{price} Rs</p>
        <button onClick={() => handleClick(item)}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Card;
