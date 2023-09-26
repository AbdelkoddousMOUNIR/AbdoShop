import React , {useState} from 'react'
import './NavBar.css'
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
export default function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div className="Navbar">
      <nav>
        <div className="logo">abdo shop</div>
        <div className="navbar-toggle" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} />
        </div>
        <ul className={`${isNavOpen ? 'active' : ''}`}>
          <li><Link to="#productsCategories" onClick={toggleNav}>products categories</Link></li>
          <li><Link to="#aboutUs" onClick={toggleNav}>about us</Link></li>
          <li><Link to="#delivery" onClick={toggleNav}>delivery</Link></li>
          <li><Link to="#contact" onClick={toggleNav}>contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}
