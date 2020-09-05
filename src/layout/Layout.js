//------------ Import libraries
import React from "react";

//------------ Import components
import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="main-container">
      <Header />
      <Logo />
      <div className="content">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
