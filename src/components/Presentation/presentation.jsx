import React from "react";
import "./style.css";
import ButtonA from "../../Elements/buttonA/buttonA.jsx";
import { useState, useEffect } from "react";

const Presentation = () => {
  const [text, setText] = useState("");
  const toRotate = ["Lucas Gadelha!", "Desenvolvedor Front End", "Engenheiro de Software"];
  const [loop, setLoop] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const period = 100;
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      toType();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const toType = () => {
    let i = loop % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setDelta(period);
      setLoop(loop + 1);
    }
  };

  return (
    <div className="Presentation poppins-medium">
      <h1 className="TitlePresentation">Olá eu sou {text}</h1>
      <h3 className="TextPresentation">
        Sou apaixonado pela área de informatica e minha paixao por computadores,
        <br /> fez com que eu chegasse onde estou, almejando o que desejo, ser um
        <br /> profissional reconhecido na área da tecnologia, e meus projetos serem
        <br /> reconhecidos por ajudarem sempre meus clientes a ter uma autonomia maior!
      </h3>
      <ButtonA link={"https://www.linkedin.com/in/lucas-gadelha/"} text="Saiba Mais"></ButtonA>
    </div>
  );
};

export default Presentation;
