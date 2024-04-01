import React from "react";
import javascript from "/javascript.svg";
import html5 from "/html5.svg";
import css3 from "/css3.svg";
import react from "/react.svg";
import typescript from "/typescript.svg";
import "./style.css";

function Skills() {
  return (
    <div className="skills poppins-medium" id="skills">
      <h1>Habilidades</h1>
      <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
      <div>
        <img src={javascript} />
        <img src={html5} />
        <img src={css3} />
        <img src={react} />
        <img src={typescript} />
      </div>
    </div>
  );
}
export default Skills;
