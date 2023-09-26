/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect , useContext } from 'react';
import '../../styles/StoresNavBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping} from '@fortawesome/free-solid-svg-icons';
import { cartContext } from '../context/CartContext';

export default function StoresNavBar({ getData}) {
  const [inputVal, setInputVal] = useState('');
  let { Toggle , cartItems} = useContext(cartContext);
  
  useEffect(() => {
    getData(inputVal);
  }, [inputVal]);

  const handleChange = (e) => {
    setInputVal(e.target.value);
  };


  return (
    <nav className="StoresNavBar">
        <Link to="/">
          <div className="logo">abdo shop</div>
        </Link>
        <input type="text" placeholder="Search for a product" onChange={handleChange} />
        <div className="cart-shopping" onClick={()=>{Toggle()}}>
          <FontAwesomeIcon icon={faCartShopping} />
          { cartItems.length === 0 ? "" : <div className="selectedProductsNumber">{cartItems.length}</div>}
        </div>
    </nav>
  );
}
