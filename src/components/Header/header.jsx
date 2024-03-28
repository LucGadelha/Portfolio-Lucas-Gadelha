import React from "react";
import iconGitHub from "../../assets/iconGitHub.svg";
import iconLinkedIn from "../../assets/iconLinkedIn.svg";
import "./style.css";

const Header = () => {
  return (
    <div className="Header poppins-regular">
      <div>
        <ul className="menuHeader">
          <a href="#projects">
            <li className="itemsMenuHeader">Projetos</li>
          </a>
          <li className="itemsMenuHeader">Tecnologia</li>
          <a href="#about">
            <li className="itemsMenuHeader">Sobre mim</li>
          </a>
        </ul>
      </div>
      <div className="iconHeader">
        <a href="https://github.com/LucGadelha" target="_Blank">
          <img className="itemsIconHeader" src={iconGitHub} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-gadelha/" target="_Blank">
          <img className="itemsIconHeader" src={iconLinkedIn} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
