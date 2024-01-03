import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom";
import DrivingSimulator from "../../Media/Headshot-Square.JPG";
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
              I've created an advanced driving simulator using Java and Java
              Swing, designed to offer a lifelike and immersive driving
              experience. The core of my simulator features a meticulously
              crafted dashboard, complete with a functioning speedometer, fuel
              gauge, and gear shift indicators. This interface provides
              real-time feedback, enhancing the authenticity of the driving
              simulation. I've created an advanced driving simulator using Java
              and Java Swing, designed to offer a lifelike and immersive driving
              experience. The core of my simulator features a meticulously
              crafted dashboard, complete with a functioning speedometer, fuel
              gauge, and gear shift indicators. This interface provides
              real-time feedback, enhancing the authenticity of the driving
              simulation. I've created an advanced driving simulator using Java
              and Java Swing, designed to offer a lifelike and immersive driving
              experience. The core of my simulator features a meticulously
              crafted dashboard, complete with a functioning speedometer, fuel
              gauge, and gear shift indicators. This interface provides
              real-time feedback, enhancing the authenticity of the driving
              simulation.
            </p>
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
            <p className="description">
              I've created an advanced driving simulator using Java and Java
              Swing, designed to offer a lifelike and immersive driving
              experience. The core of my simulator features a meticulously
              crafted dashboard, complete with a functioning speedometer, fuel
              gauge, and gear shift indicators. This interface provides
              real-time feedback, enhancing the authenticity of the driving
              simulation. I've created an advanced driving simulator using Java
              and Java Swing, designed to offer a lifelike and immersive driving
              experience. The core of my simulator features a meticulously
              crafted dashboard, complete with a functioning speedometer, fuel
              gauge, and gear shift indicators. This interface provides
              real-time feedback, enhancing the authenticity of the driving
              simulation. I've created an advanced driving simulator using Java
              and Java Swing, designed to offer a lifelike and immersive driving
              experience. The core of my simulator features a meticulously
              crafted dashboard, complete with a functioning speedometer, fuel
              gauge, and gear shift indicators. This interface provides
              real-time feedback, enhancing the authenticity of the driving
              simulation.
            </p>
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
