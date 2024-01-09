import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home.js";
import Experience from "./Pages/Experience/Experience.js";
import About from "./Pages/About/About.js";
import Projects from "./Pages/Projects/Projects.js";
import Contact from "./Pages/Contact/Contact.js";

// App Routing
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
