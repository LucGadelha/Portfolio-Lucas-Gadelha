import React from "react";
import "./style.css";

const ButtonB = ({ text, link }) => {
  return (
    <div>
      <a href={link} target="_Blank">
        <button type="button" className="buttonB poppins-semibold">
          {text}
        </button>
      </a>
    </div>
  );
};

export default ButtonB;
