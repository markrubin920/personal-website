import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './Pages/Home/Home.js';
import Experience from './Pages/Experience/Experience.js';
import About from './Pages/About/About.js';
import Projects from './Pages/Projects/Projects.js';
import Contact from './Pages/Contact/Contact.js';
import TigerApps from './Pages/Experience/TigerApps/TigerApps.js';
import SOF from './Pages/Experience/SOF/SOF.js';
import Princeton from './Pages/Experience/Princeton/Princeton.js';
import Fiserv from './Pages/Experience/Fiserv/Fiserv.js';
import HackPrinceton from './Pages/Experience/HackPrinceton/HackPrinceton.js';
import PrinceAnalytics from './Pages/Experience/Prince Analytics/PrinceAnalytics.js';

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/experience" element = {<Experience />} />
          <Route path = "/experience/princeton" element = {<Princeton />} />
          <Route path = "/experience/tigerapps" element = {<TigerApps />} />
          <Route path = "/experience/fiserv" element = {<Fiserv />} />
          <Route path = "/experience/hackprinceton" element = {<HackPrinceton />} />
          <Route path = "/experience/princeanalytics" element = {<PrinceAnalytics />} />
          <Route path = "/experience/sof" element = {<SOF />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
