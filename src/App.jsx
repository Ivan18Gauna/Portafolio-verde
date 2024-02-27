import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Coffe from "./components/Coffe.jsx";
import { Webs } from "./components/Webs.jsx";
import { Mail } from "./components/Mail.jsx";
function App() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-full">
        <Navbar />
      </div>
      <div id="section1">
        <Home />
      </div>
      <div id="section2">
        <Skills />
      </div>
      <div id="section3">
        <Coffe />
      </div>
      <div id="section4">
        <Webs />
      </div>
      <div id="section5">
        <Mail />
      </div>
    </div>
  );
}

export default App;
