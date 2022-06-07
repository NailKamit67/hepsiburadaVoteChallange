import React from "react";
import "./header.css";
import logo from "../../assets/images/logo.png";

function Header() {

  return (
    <>
      <div className="header" >
        <img src={logo} className="header__logo" alt="logo" />
        <p className="header__vote"><b>Link</b>VOTE Challange</p>
      </div>
      <hr />
    </>
  );
}

export default Header;
