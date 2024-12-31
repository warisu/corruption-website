import React from 'react';
import './App.css';
import Button from './components/Button/Button';
import Header from './Navigation/Header/header.jsx';

function App() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <>
      <Header /> 
      <h1>Custom Button Component</h1>
      <Button
        text="Custom Colors"
        onClick={handleClick}
        color="white"
        bgColor="green"
      />
    </>
  );
}

export default App;

