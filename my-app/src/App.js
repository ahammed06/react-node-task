// import logo from './logo.svg';
import React, { useEffect, useState } from 'react'
import Header from './components/Header';
import Charts from './components/Charts';
import Products from './components/Products';
import AddProduct from './components/AddProduct';
import './App.css';

function App() {
  const [productSearch, setProductSearch] = useState('')
  const [newProduct, setNewProduct] = useState([])

  const productSearchFn = (value) => {
    setProductSearch(value)
  }

  const newProductFn = (value) => {
    setNewProduct(value)
  }
  
  return (
    <>
      <Header productSearchFn={productSearchFn} />
      <AddProduct newProductFn={newProductFn} />
      <div className='main'>
        <div className='container'>
          <Charts />
          <Products productSearch={productSearch} newProduct={newProduct} />
        </div>
      </div>
    </>
  );
}

export default App;
