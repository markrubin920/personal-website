import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom";
import DrivingSimulator from "../../Media/Driving Simulator.png";
import Chip from "../../Media/Chip.jpg";
import "../../Root/Root.css";
import "./Projects.css";

const Projects = () => {
  return (
    <div>
      <header className="nav-background">
        <Navigation />
      </header>
      <section className="projects-a">
        <div className="projects-a-div">
          <div className="title-a-div">
            <h1 className="title-a">Driving Simulator</h1>
            <h3 className="skills-a">Skills: Java, Java Swing</h3>
            <div className="link-div">
              <a href="github.com" className="link-a">
                Link to Repository
              </a>
            </div>
          </div>
          <div className="description-div">
            <p className="description">
              The driving simulator project was created to combine what I had
              learned from two classes my freshman fall semester, ‘The Coming of
              Driverless Cars’ seminar and ‘Computer Science: An
              Interdisciplinary Approach’. From what I had learned in the two
              courses, I decided to make my independent project for the computer
              science class a driving simulator to try to encapsulate a lot of
              the basic issues autonomous vehicle developers must deal with.{" "}
              <br></br>
              <br></br>
              When the user enters the simulator, they choose from a variety of
              road setups that are initially configured. When the user enters
              the simulator, they control one of the cars, and there are
              typically 3-4 cars also in the environment that are autonomous.
              They were trained to stop at red lights, accelerate when it turns
              green, know which direction to turn so they stay on path, and stop
              moving when they hit a dead end. The user controls their car
              through the keyboard and must drive through the track without
              crashing or running through any red lights. <br></br>
              <br></br>
              At the time, this project was my first large computer science
              project and solidified my interest in the field as I really
              enjoyed building something this complex and seeing the power of
              programming objects to have certain behaviors.
            </p>
          </div>
          <div className="img-positioning-a">
            <img
              src={DrivingSimulator}
              alt="Driving Simulator Project"
              className="image-a"
            ></img>
          </div>
        </div>
      </section>

      <section className="projects-b">
        <div className="projects-b-div">
          <div className="img-positioning-a">
            <img src={Chip} alt="PUnC Project" className="image-a"></img>
          </div>
          <div className="description-div">
            <p className="description">
              My favorite class in college has been “Introduction to
              Contemporary Logic Design” because it really allowed me to
              understand <i>how</i> computing works. As the final project for
              the course, we were provided with 19 unique instructions such as
              add, branch, jump, etc. and needed to use Verilog to program a
              processor capable of running any assembly program using that
              instruction set on it. Ultimately, the project was successful, and
              I was able to run programs such as Euclid’s greatest common
              denominator algorithm and computing the modulus without division
              or subtraction. <br></br>
              <br></br>
              This project taught me a lot about chip design and how to plan out
              hardware design through drawing signal tables, data paths and
              state machines. It also made me more aware of the fundamental
              architecture of computers which will make me a better programmer
              by understanding how and why things work the way they do.{" "}
              <br></br>
              <br></br>I am currently working on the field programmable gate
              array (FPGA) implementation of this project to program my Verilog
              code onto actual hardware!
            </p>
          </div>
          <div className="title-a-div">
            <h1 className="title-a">Princeton University Computer (PUnC)</h1>
            <h3 className="skills-a">Skills: Verilog, Hardware Design</h3>
            <div className="link-div">
              {/* <p>Repository Unavailable</p> */}
              {/* <a href="github.com" className="link-a">
                Link to Repository
              </a> */}
            </div>
          </div>
        </div>
      </section>

      <section className="projects-a">
        <div className="projects-a-div">
          <div className="title-a-div">
            <h1 className="title-a">Driving Simulator</h1>
            <h3 className="skills-a">Skills: Java, Java Swing</h3>
            <div className="link-div">
              <a href="github.com" className="link-a">
                Link to Repository
              </a>
            </div>
          </div>
          <div className="description-div">
            <p className="description">Bla bla bla</p>
          </div>
          <div className="img-positioning-a">
            <img src={DrivingSimulator} alt="Project" className="image-a"></img>
          </div>
        </div>
      </section>

      <section className="projects-b">
        <div className="projects-b-div">
          <div className="img-positioning-a">
            <img src={DrivingSimulator} alt="Project" className="image-a"></img>
          </div>
          <div className="description-div">
            <p className="description">Bla bla bla</p>
          </div>
          <div className="title-a-div">
            <h1 className="title-a">Driving Simulator</h1>
            <h3 className="skills-a">Skills: Java, Java Swing</h3>
            <div className="link-div">
              <a href="github.com" className="link-a">
                Link to Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-a">
        <div className="projects-a-div">
          <div className="title-a-div">
            <h1 className="title-a">Driving Simulator</h1>
            <h3 className="skills-a">Skills: Java, Java Swing</h3>
            <div className="link-div">
              <a href="github.com" className="link-a">
                Link to Repository
              </a>
            </div>
          </div>
          <div className="description-div">
            <p className="description">Bla bla bla</p>
          </div>
          <div className="img-positioning-a">
            <img src={DrivingSimulator} alt="Project" className="image-a"></img>
          </div>
        </div>
      </section>

      <footer className="footer-container">
        <Bottom />
      </footer>
    </div>
  );
};

export default Projects;
