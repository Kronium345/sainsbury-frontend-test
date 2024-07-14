import React from 'react';

// Component to render the basket
function Basket({ basket, toggleBasket }) {
  return (
    <div className="basket">
      <h2>Your Basket ({basket.length} items)</h2>
      <button onClick={toggleBasket}>Close</button>
      {basket.map((product, index) => (
        <div key={index} className="basket-item">
          <img src={product.image} alt={product.title} className="basket-item-image" />
          <div className="basket-item-details">
            <p>{product.title}</p>
            <p>{product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Basket;
