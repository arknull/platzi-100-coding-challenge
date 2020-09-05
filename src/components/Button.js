//------------ Import libraries
import React from "react";

const Button = ({ value, handleClick }) => {
  return (
    <button onClick={handleClick} className="button">
      {value}
    </button>
  );
};

export default Button;
