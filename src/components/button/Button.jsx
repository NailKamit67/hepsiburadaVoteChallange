import React from "react";
import "./button.css";

function Button(props) {

  return (
    <>
        <button type="button" className="btn link__button"  {...props} >{props.children}</button>
    </>
  );
}

export default Button;
