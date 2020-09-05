import React from "react";

const Input = ({ name, placeholder, handleChange }) => {
  return (
    <input
      className="content__input"
      type="text"
      name={name}
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};

export default Input;
