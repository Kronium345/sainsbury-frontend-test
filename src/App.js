import React, { useState, useEffect } from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Basket from './components/Basket';
import { FaShoppingBasket } from 'react-icons/fa';

function App() {
  const [products, setProducts] = useState([]);
  const [basket, setBasket] = useState([]);
  const [showBasket, setShowBasket] = useState(false);

  useEffect(() => {
    fetch('https://jsainsburyplc.github.io/front-end-test/products.json')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const toggleBasket = () => {
    setShowBasket(!showBasket);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <button className="basket-icon" onClick={toggleBasket}>
          <FaShoppingBasket /> <span>{basket.length}</span>
        </button>
      </header>
      {showBasket && <Basket basket={basket} toggleBasket={toggleBasket} />}
      <ProductList products={products} addToBasket={addToBasket} />
    </div>
  );
}

export default App;
