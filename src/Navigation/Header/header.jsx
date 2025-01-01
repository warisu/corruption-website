import React from "react"; 
import './header.css';
import Navigation from '../Nav/nav.jsx';

const Header = () => {
  return (
    <header className="header">
      <div className='logo'>
         <img id="header-img" src="http://www.talkingcorruptionsi.com/talking.jpg" loading="lazy"/>
         <span>Talking Corruption & si </span>
      </div>
      <div>
	  <Navigation /> {/* Include the Navigation component */}
      </div>
   </header>
  );
};

export default Header;

