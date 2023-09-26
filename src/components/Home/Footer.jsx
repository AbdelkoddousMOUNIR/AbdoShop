import React from 'react'
import './Footer.css'
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faGithub, faWhatsapp , faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <div className='Footer' id='contact'>
      <div className="waves">
        <div className="wave" id="wave1"></div>
        <div className="wave" id="wave2"></div>
        <div className="wave" id="wave3"></div>
        <div className="wave" id="wave4"></div>
      </div>
      <div className="container">
        <div className="content">
        <h1>content</h1>
        <ul>
          <li><HashLink smooth to="#aboutUs">about us</HashLink></li>
          <li><HashLink smooth to="#productsCategories">products categories</HashLink></li>
          <li><HashLink smooth to="#delivery">delivery</HashLink></li>
          <li><HashLink smooth to="#contact">contact</HashLink></li>
          <h3>shopnet ©</h3>
        </ul>
        </div>
        <div className="social-media">
          <h1>social media</h1>
          <div className="icons">
            <Link><FontAwesomeIcon icon={faLinkedin} className='icon' style={{color:"#0e76a8"}}/></Link>
            <Link><FontAwesomeIcon icon={faGithub} className='icon' style={{color:"#171515"}}/></Link>
            <Link><FontAwesomeIcon icon={faEnvelope} className='icon' style={{color:"#3e65cf"}}/></Link>
            <Link><FontAwesomeIcon icon={faWhatsapp} className='icon' style={{color:"#128C7E"}}/></Link>
            <Link><FontAwesomeIcon icon={faInstagram} className='icon' style={{color:"#E1306C "}}/></Link>
            <Link><FontAwesomeIcon icon={faFacebook} className='icon' style={{color:"#3b5998"}}/></Link>
          </div>
        </div>
      </div>
    </div>
  )
}
