import React, { useEffect, useState } from "react";
import "./style.css";
import ButtonB from "../buttonB/buttonB";

const Cards = ({ image, name, description, site }) => {
  return (
    <div>
      <div className="projects--card">
        <div className="projects--cardImage">
          <img src={image} alt="erro" id="imagem" />
          <h1 className="projects--cardName poppins-semibold">{name}</h1>
        </div>
        <p className="projects--cardDescription poppins-semibold">{description}</p>

        <div className="botao">
          <ButtonB text="clique aqui" link={site} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
