import React from "react";
import "./style.css";

const ButtonB = ({ text, link }) => {
  return (
    <div>
      <a href={link} target="_Blank">
        <button type="button" className="ButtonB poppins-medium">
          {text}
        </button>
      </a>
    </div>
  );
};

export default ButtonB;
