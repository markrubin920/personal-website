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
            <a href="github.com" className="link-a">
              Link to Repository
            </a>
          </div>
          <div className="description-div">
            <p className="description">
              I've created an advanced driving simulator using Java and Java
              Swing, designed to offer a lifelike and immersive driving
              experience. The core of my simulator features a meticulously
              crafted dashboard, complete with a functioning speedometer, fuel
              gauge, and gear shift indicators. This interface provides
              real-time feedback, enhancing the authenticity of the driving
              simulation. <br></br>
              <br></br>In addition to user-controlled vehicles, my simulator
              includes an innovative feature of autonomous cars. These AI-driven
              vehicles navigate the roads independently, mimicking real-world
              traffic behaviors and patterns. This addition not only enriches
              the driving environment but also introduces challenges and
              scenarios typical in daily driving, such as navigating busy
              intersections or highway driving. <br></br>
              <br></br>The simulator is equipped with interactive controls for
              steering, acceleration, and braking, allowing users to experience
              the nuances of driving. I've also integrated various weather
              conditions – from clear skies to heavy rain – to test the user's
              driving skills under different environmental settings. <br></br>
              <br></br> The graphical aspect of the simulator is one of its
              strongest points. Utilizing Java's robust capabilities, I've
              rendered 3D cityscapes and landscapes with exceptional clarity and
              detail, providing a visually stunning backdrop to the driving
              experience. The landscapes change dynamically, offering a diverse
              range of driving scenarios, from urban streets to rural roads.
              <br></br>
              <br></br>Through this simulator, I aim to provide a comprehensive
              and realistic driving experience, blending the thrill of control
              with the unpredictability of AI-driven vehicles in a graphically
              rich environment.
            </p>
          </div>
          <div className="img-positioning-a">
            <img src={DrivingSimulator} alt="Project" className="image-a"></img>
          </div>
        </div>
      </section>

      <section className="projects-b">
        <div className="projects-a-div">
          <div className="img-positioning-a">
            <img src={DrivingSimulator} alt="Project" className="image-a"></img>
          </div>
          <div className="description-div">
            <p className="description">Bla bla bla</p>
          </div>
          <div className="title-a-div">
            <h1 className="title-a">Driving Simulator</h1>
            <h3 className="skills-a">Skills: Java, Java Swing</h3>
            <a href="github.com" className="link-a">
              Link to Repository
            </a>
          </div>
        </div>
      </section>

      <section className="projects-a">
        <div className="projects-a-div">
          <div className="title-a-div">
            <h1 className="title-a">Driving Simulator</h1>
            <h3 className="skills-a">Skills: Java, Java Swing</h3>
            <a href="github.com" className="link-a">
              Link to Repository
            </a>
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
        <div className="projects-a-div">
          <div className="img-positioning-a">
            <img src={DrivingSimulator} alt="Project" className="image-a"></img>
          </div>
          <div className="description-div">
            <p className="description">Bla bla bla</p>
          </div>
          <div className="title-a-div">
            <h1 className="title-a">Driving Simulator</h1>
            <h3 className="skills-a">Skills: Java, Java Swing</h3>
            <a href="github.com" className="link-a">
              Link to Repository
            </a>
          </div>
        </div>
      </section>

      <section className="projects-a">
        <div className="projects-a-div">
          <div className="title-a-div">
            <h1 className="title-a">Driving Simulator</h1>
            <h3 className="skills-a">Skills: Java, Java Swing</h3>
            <a href="github.com" className="link-a">
              Link to Repository
            </a>
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
