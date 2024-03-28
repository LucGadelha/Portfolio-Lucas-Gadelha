import React from "react";
import "./style.css";

const ButtonA = ({ text, link }) => {
  return (
    <div>
      <a href={link}>
        <button type="button" className="ButtonA poppins-medium">
          {text}
        </button>
      </a>
    </div>
  );
};

export default ButtonA;
