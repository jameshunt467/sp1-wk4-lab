import React from 'react';

interface ButtonProps {
    handleEvent: () => void;
    children: React.ReactNode;
    color: string; // Adding color prop
  }
  
  const Button: React.FC<ButtonProps> = ({ handleEvent, children, color }) => {
    return <button onClick={handleEvent} style={{ backgroundColor: color }}>{children}</button>;
  };
  

export default Button;
