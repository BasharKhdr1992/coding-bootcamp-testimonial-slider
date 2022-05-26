import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="btn-icon">
      {children}
    </button>
  );
};

export default Button;
