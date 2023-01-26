import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home";
import AboutMe from './Components/About';
import Skills from './Components/Skills';
import Educations from './Components/Educations';
import Projects from './Components/Projects';
import GithubCalender from './Components/GithubCalender';
import ContactSection from './Components/ContactSection';
import GithubStats from './Components/GithubStats';
import MyStatistics from './Components/MyStatistics';
import Footer from './Components/Footer';


function App() {
  return (
    <>
      <Navbar />
      <Home />
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
      <br />
      <br />
      <hr />
      <br />
      <GithubCalender />
      <br />
      <hr />
      <br />
      <GithubStats />
      <br />
      <hr />
      <br />
      <MyStatistics />
      <br />
      <hr />
      <br />
      <ContactSection />
      <br />
      <br />
      <Footer />
      
    </>
  );
}

export default App;
