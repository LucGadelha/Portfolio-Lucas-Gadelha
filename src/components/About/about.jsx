import React from "react";
import "./style.css";

const About = () => {
  return (
    <div className="about poppins-medium" id="about">
      <h1 className="about--title">Sobre mim</h1>
      <div className="about--timeLine">
        <div className="about--timeLineFirstCard">
          <div className="about--year">
            <p className="about--yearText">2014</p>
          </div>
          <div className="about--firstLine">
            <div className="about--lineCircle" />
          </div>
          <div className="about--timeLineDescription">
            <p className="about--timeLineDescriptionText">
              Iniciei trabalhando na C&A MODAS como Promotor de Vendas, me destacando na área de analista de processos e
              atuei como Líder de Processos, coordenando a equipe de mais de 20 analistas.
            </p>
          </div>
        </div>

        <div className="about--timeLineCard">
          <div className="about--year">
            <p className="about--yearText">2019</p>
          </div>
          <div className="about--line">
            <div className="about--lineCircle" />
          </div>
          <div className="about--timeLineDescription">
            <p className="about--timeLineDescriptionText">
              Iniciei na área de auxiliar administrativo, ganhando experiência de vivência em escritório e processos
              administrativos.
            </p>
          </div>
        </div>
        <div className="about--timeLineCard">
          <div className="about--year">
            <p className="about--yearText">2021</p>
          </div>
          <div className="about--line">
            <div className="about--lineCircle" />
          </div>
          <div className="about--timeLineDescription">
            <p className="about--timeLineDescriptionText">
              Comecei na área de compras, tive a oportunidade de entrar como Analista de Compras em um grande
              restaurante renomado na cidade.
            </p>
          </div>
        </div>
        <div className="about--timeLineCard">
          <div className="about--year">
            <p className="about--yearText">2023</p>
          </div>
          <div className="about--line">
            <div className="about--lineCircle" />
          </div>
          <div className="about--timeLineDescription">
            <p className="about--timeLineDescriptionText">
              Tomei a decisão de focar na área que sempre sonhei em trabalhar, comecei a ver aulas no YouTube, comecei a
              focar em fazer cursos de programação e também me aprofundei em Inglês.
            </p>
          </div>
        </div>
        <div className="about--timeLineLastCard">
          <div className="about--year">
            <p className="about--yearText">2024</p>
          </div>
          <div className="about--lastLine">
            <div className="about--lineCircle" />
          </div>
          <div className="about--timeLineDescription">
            <p className="about--timeLineDescriptionText">
              É o ano do meu sucesso, e entrarei na área de desenvolvimento o mais breve!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
