import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Home from './Pages/Home/Home.js';
import Experience from './Pages/Experience/Experience.js';
import About from './Pages/About/About.js';
import Projects from './Pages/Projects/Projects.js';
import Contact from './Pages/Contact/Contact.js';;

function App() {
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element = {<Home />} />
          <Route path = "/home" element = {<Home />} />
          <Route path = "/experience" element = {<Experience />} />
          <Route path = "/experience/princeton" element = {<Experience />} />
          <Route path = "/experience/tigerapps" element = {<Experience />} />
          <Route path = "/experience/fiserv" element = {<Experience />} />
          <Route path = "/experience/hackprinceton" element = {<Experience />} />
          <Route path = "/experience/princeanalytics" element = {<Experience />} />
          <Route path = "/experience/sof" element = {<Experience />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/projects" element = {<Projects />} />
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
