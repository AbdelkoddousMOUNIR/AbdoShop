import React from 'react'
import "./About.css"
import AboutImg from '../imgs/about us.jpg'
export default function About() {
  return (
    <div className='About' id='aboutUs'>
      <h1 >about us</h1>
      <div className="container">
      <img src={AboutImg} alt="About Us" className='AboutImg'/>
      <p>At shopnet, we're dedicated to providing a diverse and enriching shopping experience. Our curated collection spans various categories,
        each chosen for its exceptional quality. From fashion to electronics, home goods to well-being products,
        we've meticulously selected items to elevate modern living. With a focus on excellence and customer satisfaction,
        we invite you to explore a journey of discovery and convenience with us. Welcome to shopnet
        , where shopping meets inspiration.</p>
      </div>
    </div>
  )
}
