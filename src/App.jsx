import { useState } from "react";
import "./App.css";
import Header from "./Views/Header/header.jsx";
import Presentation from "./Views/Presentation/presentation.jsx";
import Projects from "./Views/Projects/projects.jsx";
import About from "./Views/About/about.jsx";
import Footer from "./Views/Footer/footer.jsx";
import Skills from "./Views/Skills/skills.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Presentation />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </>
  );
}

export default App;
