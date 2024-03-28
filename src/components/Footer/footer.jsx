import React from "react";
import iconGitHub from "../../assets/iconGitHubFt.svg";
import iconLinkedIn from "../../assets/iconLinkedInFt.svg";
import iconFigma from "../../assets/iconFigma.svg";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer poppins-regular">
      <div>
        <ul className="footer--menu">
          <li className="footer--itemsMenu poppins-medium">
            <a href="https://wa.me/92981634154/?" target="_Blank">
              <div className="">
                Meu contato:
                <br />
                92 98163-4154
              </div>
            </a>
          </li>
          <li className="footer--itemsMenu poppins-medium">
            <div>
              Meu Email:
              <br />
              lgadelha582@gmail.com
            </div>
          </li>
        </ul>
      </div>
      <div className="footer--icons">
        <a href="https://github.com/LucGadelha" target="_Blank">
          <img className="footer--iconItems" src={iconGitHub} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/lucas-gadelha/" target="_Blank">
          <img className="footer--iconItems" src={iconLinkedIn} alt="" />
        </a>
        <a href="https://www.figma.com/files/user/1279101637115340424?fuid=1279101637115340424" target="_Blank">
          <img className="footer--iconItems" src={iconFigma} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
