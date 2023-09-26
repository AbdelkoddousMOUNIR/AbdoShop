import React from 'react'
import './Delivery.css'
import ordering from '../imgs/ordering.jpg'
import packaging from '../imgs/packaging.jpg'
import shipping from '../imgs/shipping.jpg'
import delivery from '../imgs/delivery.jpg'

export default function Delivery() {
  return (
    <div id='delivery'>
      <h1>delivery process</h1>
      <div className="g-container">
        <div className="container">
          <img src={ordering} alt="ordering" />
          <h3>ordering</h3>
        </div>
        <div className="container">
          <img src={packaging} alt="packaging" />
          <h3>packaging</h3>
        </div>
        <div className="container">
          <img src={shipping} alt="shipping" />
          <h3>shipping</h3>
        </div>
        <div className="container">
          <img src={delivery} alt="delivery" />
          <h3>delivery</h3>
        </div>
      </div>
    </div>
  )
}
