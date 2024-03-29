import React from "react";
import "./style.css";

const ButtonA = ({ text, link }) => {
  return (
    <div>
      <a href={link}>
        <button type="button" className="buttonA poppins-semibold">
          {text}
        </button>
      </a>
    </div>
  );
};

export default ButtonA;
