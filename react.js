import React from 'react';

interface ButtonProps {
  handleEvent: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ handleEvent, children }) => {
  return <button onClick={handleEvent}>{children}</button>;
};

export default Button;
