import React from "react"; 
import './header.css';
import Navigation from '../Nav/nav.jsx';

const Header = () => {
  return (
    <header className="header">
      <div className='logo'>Corruption Watch</div>
      <Navigation /> {/* Include the Navigation component */}
    </header>
  );
};

export default Header;

