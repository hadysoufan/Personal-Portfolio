import "./App.css";
import {NavBar} from "./components/NavBar/NavBar.component";
import {Banner} from "./components/Banner/Banner.component";
import {Skills} from "./components/Skills/Skills.component";
import {Projects} from "./components/Projects/Projects.component";
import {Footer} from "./components/Footer/Footer.component";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
