/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect , useContext } from 'react';
import '../../styles/StoresNavBar.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHouse, faShop } from '@fortawesome/free-solid-svg-icons';
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
      <div className="container">
        <Link to="/">
          <div className="logo">abdo shop</div>
        </Link>
        <input type="text" placeholder="Search for a product" onChange={handleChange} />
      </div>
      <div className="icons">
        <div className="icon">
          <HashLink to="#Home">
            <FontAwesomeIcon icon={faHouse} />
          </HashLink>
          <HashLink to="#StoresProducts">
            <FontAwesomeIcon icon={faShop} />
          </HashLink>
        </div>
        <div className="cart-shopping" onClick={()=>{Toggle()}}>
          <FontAwesomeIcon icon={faCartShopping} />
          { cartItems.length === 0 ? "" : <div className="selectedProductsNumber">{cartItems.length}</div>}
        </div>
      </div>
    </nav>
  );
}
