// Button.jsx
import React from 'react';

// Button component that takes `label` and `onClick` props
const Button = ({ label, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;

