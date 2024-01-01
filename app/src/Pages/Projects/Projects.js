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
            <a href="github.com" className="link-a">
              Link to Repository
            </a>
          </div>
        </div>
      </section>
      <section className="projects-a">
        <h1>Projects</h1>
      </section>
      <section className="projects-b">
        <h1>Projects</h1>
      </section>
      <section className="projects-a">
        <h1>Projects</h1>
      </section>
      <footer className="footer-container">
        <Bottom />
      </footer>
    </div>
  );
};

export default Projects;
