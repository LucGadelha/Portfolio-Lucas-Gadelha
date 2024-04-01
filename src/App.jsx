import { useState } from "react";
import "./App.css";
import Header from "./components/Header/header.jsx";
import Presentation from "./components/Presentation/presentation.jsx";
import Projects from "./components/Projects/projects.jsx";
import About from "./components/About/about.jsx";
import Footer from "./components/Footer/footer.jsx";
import Skills from "./components/Skills/skills.jsx";

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
