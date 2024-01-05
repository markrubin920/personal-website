import "./Home.css";
import Bottom from "../../Components/Bottom Container/Bottom";
import Navigation from "../../Components/Navigation/Navigation";
import Fiserv from "../../Media/Fiserv-Picture.jpg";
import Driver from "../../Media/Driving Simulator.png";
import Github from "../../Media/Github-mini-logo.png";
import Mail from "../../Media/Mail-mini-logo.png";
import LinkedIn from "../../Media/Linkedin-mini-logo.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="app">
      <section className="top-container">
        <Navigation />
        <div className="tc-writing">
          <h2 className="hello">
            Hi, my name is<br></br>Mark Rubin
          </h2>
          <div className="about-button-div">
            <NavLink to="/about">About Me</NavLink>
          </div>
        </div>
      </section>
      <section className="about-container">
        <div className="about-div">
          <p className="about-text">
            A sophomore studying computer science and engineering at Princeton
            University, passionate about learning the technologies of today to
            make an impact tomorrow. I am a highly driven, curious and
            team-oriented individual, always looking for opportunities to
            challenge myself.
          </p>
        </div>
      </section>

      <section className="exp-container">
        <div className="exp-div">
          <div className="writing">
            <h1 className="title">Work and Extracurricular Experiences</h1>
            <h1 className="subtitle">
              My education, internship, extracurricular and startup experiences
              have made me into a truly well rounded individual. They have
              helped me develop a strong work ethic and built up my skills, both
              technical and personal.
            </h1>
            <div className="learn-more-div">
              <NavLink to="/experience" className="learn-more">
                Learn More
              </NavLink>
            </div>
          </div>
          <div className="picture-intern">
            <img src={Fiserv} alt="Fiserv Internship" className="dem-pic"></img>
          </div>
        </div>
      </section>

      <section className="exp-container">
        <div className="proj-div">
          <div className="picture-projects">
            <img src={Driver} alt="Driving Simulator" className="dem-pic"></img>
          </div>
          <div className="writing">
            <h1 className="title">Projects</h1>
            <h1 className="subtitle">
              Projects have given me an outlet to pursue my interests and learn
              more in areas beyond the classroom alone. They have also taught me
              a lot about system design and understanding the complexities of
              technology in realistic and difficult situations.
            </h1>
            <div className="learn-more-div">
              <NavLink to="/projects" className="learn-more">
                Learn More
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <p className="quote-text">
          My interests in technology span a variety of sectors, including full
          stack software engineering, quantitative finance, artificial
          intelligence, and cloud and quantum computing. Look around to learn
          more about me and I look forward to connecting!
        </p>
      </section>
      <section className="contact-container">
        <div className="get-in-touch">
          <h2 className="gt-text">Let's get in touch!</h2>
        </div>
        <div className="contact-info">
          <ul className="contact-list">
            <li>
              <h2>Contact Information</h2>
            </li>
            <li>
              <img src={Mail} alt="Mail logo" className="temp-icon"></img>
              <a href="mailto:markrubin920@gmail.com" className="contact">
                Email markrubin920@gmail.com
              </a>
            </li>
            <li>
              <img
                src={LinkedIn}
                alt="Linkedin logo"
                className="temp-icon"
              ></img>
              <a
                href="https://www.linkedin.com/in/markrubin10/"
                className="contact"
              >
                LinkedIn: Mark Rubin
              </a>
            </li>
            <li>
              <img src={Github} alt="Github logo" className="temp-icon"></img>
              <a href="github.com" className="contact">
                GitHub: markrubin920
              </a>
            </li>
          </ul>
        </div>
      </section>

      <Bottom />
    </div>
  );
};

export default Home;
