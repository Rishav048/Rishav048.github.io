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
import Tools from './Components/Tools';
import { Box } from '@chakra-ui/react';



function App() {
  

  return (
    <Box bg={'white'} color={'black'}>
      <Navbar />
      <Home />
      <br />
      <hr />
      <AboutMe />
      <Skills />
      <br />
      <hr />
      <br />
      <Tools />
      <br />
      <hr />
      <br />
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
    </Box>
  );
}

      
      
   



export default App;
