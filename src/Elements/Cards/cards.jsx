import React, { useEffect, useState } from "react";
import "./style.css";
import ButtonB from "../buttonB/buttonB";

const Cards = ({ image, name, description, site }) => {
  return (
    <div>
      <div className="CardProjects">
        <div className="ImgCardProjects">
          <img src={image} alt="erro" id="imagem" />
          <h1 className="name poppins-medium">{name}</h1>
        </div>
        <p className="description poppins-medium">{description}</p>

        <div className="botao">
          <ButtonB text="clique aqui" link={site} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
