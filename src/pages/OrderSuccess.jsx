import React from 'react';
import '../styles/OrderSuccess.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function OrderSuccess() {
    let navigate = useNavigate()
  return (
    <div className='OrderSuccess'>
        <div className="container">
            <FontAwesomeIcon icon={faCheck} className='check'/> 
              <h1>thank you for your confidence</h1>
              <h3>we will contact you very soon to confirme your order !</h3>
              <h4>if you have any questions please email <Link>Sopnet@gmail.com</Link></h4>
              <button onClick={() =>{navigate("/")}}>continue shopping</button>
        </div>
    </div>
  )
}
