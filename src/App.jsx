import Home from "./component/Home";
import About from "./component/About";
import Skills from "./component/Skills";
import Education from "./component/Education";
import Navbar from "./component/Navbar"
import Work from "./component/SideProject";
import SideProject from "./component/SideProject";

function App() {
  return (
    <>
    <Navbar/>
    <Home />
    <About/>
    <Skills/>
    <Education/>
    <SideProject/>
    
    </>
  );
};

export default App
