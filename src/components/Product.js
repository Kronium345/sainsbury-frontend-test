import React from 'react';

// Component to render a single product
function Product({ product, addToBasket }) {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.sku}</p>
      <p>Price: {product.price}</p>
      <button onClick={() => addToBasket(product)}>Add to Basket</button>
    </div>
  );
}

export default Product;
