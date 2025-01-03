import React, { useState } from "react"; 
import './header.css';
import Navigation from '../Nav/nav.jsx';

function Header () {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className='logo'>
        <div>
	      <img className="header-img" src="https://www.talkingcorruptionsi.com/talking.jpg" alt="Talking Corruption & si" loading="lazy"/>
           <span>Talking Corruption & si </span>
        </div>
        <div>
	   <nav className="navbar">
              <div className="menu-toggle" onClick={toggleMenu}>
		 <span className="bar"></span>
		 <span className="bar"></span>
		 <span className="bar"></span>
              </div>
             <ul className={`nav-links ${isMenuOpen ? "active" : ""} `}>
	       <li><a href="#feedback">Feedback</a></li>
	       <li><a href="#news">News</a></li>
	       <li><a href="#topics">Topics</a></li>
             </ul>
	    </nav>
	</div>
      </div>
      <div>
	  <Navigation /> {/* Include the Navigation component */}
      </div>
   </header>
  );
};

export default Header;

