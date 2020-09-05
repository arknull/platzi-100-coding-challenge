//------------ Import libraries
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>
      <Link className="header__name" to="/">
        Platzi Coding Challenge
      </Link>
    </header>
  );
};

export default Header;
