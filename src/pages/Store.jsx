import React, { useState , useContext } from 'react';
import '../styles/Store.css';
import StoresNavBar from '../components/StoresComponents/StoresNavBar';
import StoresBanner from '../components/StoresComponents/StoresBanner';
import StoresProducts from '../components/StoresComponents/StoresProducts';
import StorePannie from '../components/StoresComponents/StoresPannie';
import { cartContext } from '../components/context/CartContext';

export default function Store({products}) {
    const [inputData, setInputData] = useState('');
    const { showCart, cartItems} = useContext(cartContext);
    const Banner = products[products.length - 1];
    
    const getData = (data) => {
      setInputData(data);
    };
    return (
      <div className="Store">
        <StoresNavBar getData={getData} productsNumber={1} />
        {inputData.length === 0 ? <StoresBanner Banner = {Banner} /> : ""}
        <StoresProducts Inputdata={inputData} data={products} />
        {showCart && cartItems.length > 0 ? <StorePannie /> : ''}
      </div>  
    );
}
