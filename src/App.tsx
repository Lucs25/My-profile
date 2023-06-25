import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Hero } from "./components/Hero";
import Project from "./components/Project";
import { Service } from "./components/Services";
import { Skills } from "./components/Skills";
import "./App.css";

function App() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Project />
      <Skills />
      <Contact />
    </main>
  );
}

export default App;
