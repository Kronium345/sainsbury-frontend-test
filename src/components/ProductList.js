import React from 'react';
import Product from './Product';

// Component to render a list of products
function ProductList({ products, addToBasket }) {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product.sku} product={product} addToBasket={addToBasket} />
      ))}
    </div>
  );
}

export default ProductList;
