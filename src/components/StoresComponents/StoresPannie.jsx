/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext} from 'react';
import '../../styles/StoresPannie.css';
import { cartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX , faTrash } from '@fortawesome/free-solid-svg-icons';

export default function StoresPannie() {
  let {cartItems , remouveProduct , Toggle , totalAmount} = useContext(cartContext)
  let navigate = useNavigate();

  return (
    <div className="StoresPannie">
      <FontAwesomeIcon icon={faX} className='Xicon' onClick={() => { Toggle() }} />
      <div className="items">
        {cartItems.map((item , index) => (
        <div className="container" key={index}>
          <img src={item.imgs[0]} alt={item.name} />
          <span>{item.price} $</span>
          <button onClick={() =>{navigate(`/${item.category}/${item.name}`)}}>order now</button>
          <button onClick={() => {remouveProduct(item.name)}} className='Trash'><FontAwesomeIcon icon={faTrash} /></button>
        </div>
      ))}
      </div>
      <div className="totaleAmount">
        <h2>total price : {totalAmount}$</h2>
      </div>
    </div>
  );
}





