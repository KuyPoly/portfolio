import Navbar from "./components/Nav/navbar";
import Intro from "./components/Intro/intro";
import Skill from "./components/skill/skill";
import Work from "./components/work/work";
import Contact from "./components/contact/contact";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skill />
      <Work />
      <Contact /> 
    </div>
  );
}

export default App;
