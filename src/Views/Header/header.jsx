import React from "react";
import iconGitHub from "../../assets/iconGitHub.svg";
import iconLinkedIn from "../../assets/iconLinkedIn.svg";
import "./style.css";

const Header = () => {
  return (
    <div className="header poppins-medium">
      <div>
        <ul className="header--menu">
          <a href="#projects">
            <li className="header--menuItems">Projetos</li>
          </a>
          <li className="header--menuItems">Tecnologia</li>
          <a href="#about">
            <li className="header--menuItems">Sobre mim</li>
          </a>
        </ul>
      </div>
      <div className="header--icons">
        <a href="https://github.com/LucGadelha" target="_Blank">
          <img className="header--iconsItem" src={iconGitHub} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-gadelha/" target="_Blank">
          <img className="header--iconsItem" src={iconLinkedIn} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Header;
