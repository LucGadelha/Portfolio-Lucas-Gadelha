import React, { useEffect, useState } from "react";
import "./style.css";
import Cards from "../../Elements/Cards/cards";

const Projects = () => {
  const projetos = [
    {
      id: 1,
      imageLink: "/Primeiros-passos-Landing-Page.svg",
      title: "Landing Page - DNC",
      descr: "Primeiro esboço de Landing Page para curso de formação em tecnologia - Escola DNC",
      html_link: "https://challenge01-l.netlify.app",
    },
    {
      id: 2,
      imageLink: "/Desafio-01.svg",
      title: "Desafio 01 - DNC",
      descr: "Primeiro Desafio proposto para exercitar os aprendizados do curso de formação em tecnologia - Escola DNC",
      html_link: "https://first-landing-page-l.netlify.app",
    },
    {
      id: 3,
      imageLink: "/Desafio-Landing-Page.svg",
      title: "Landing Page CCXP - DNC",
      descr: "Desafio proposto para exercitar o uso do JavaScript e suas funções - Escola DNC",
      html_link: "https://landingpageccxp-l.netlify.app",
    },
    {
      id: 4,
      imageLink: "/portfolio-1.svg",
      title: "Projeto Portfolio",
      descr: "Projeto realizado durante aulas do curso de Formação em Tecnologia da Escola DNC",
      html_link: "https://portfolio-lucas-gadelhas-projects.vercel.app",
    },
  ];

  const [project, setProject] = useState(projetos);

  console.log(project);

  return (
    <div id="projects">
      <h1 className=" TitleProjects poppins-medium">Projetos</h1>
      <div className="CardShow">
        {project.length > 0 ? (
          project.map((proj) => (
            <Cards
              key={proj.id}
              image={proj.imageLink}
              name={proj.title}
              description={proj.descr}
              site={proj.html_link}
            />
          ))
        ) : (
          <p>"Problema com o render</p>
        )}
      </div>
    </div>
  );
};

export default Projects;
