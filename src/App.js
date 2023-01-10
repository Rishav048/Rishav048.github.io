import './App.css';
import Navbar from './Components/Navbar';
import ContentSec from './Components/ContentSec';
import AboutMe from './Components/About';
import Skills from './Components/Skills';
import Educations from './Components/Educations';
import Projects from './Components/Projects';


function App() {
  return (
    <div className="App">
      <Navbar />
      <ContentSec />
      <br />
      <hr />
      <AboutMe />
      <Skills />
      <hr />
      <Educations />
      <br />
      <hr />
      <br />
     
      <Projects />
     



      
    </div>
  );
}

export default App;
