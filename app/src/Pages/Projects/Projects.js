import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom"
import "../../Root/Root.css";

const Projects = () =>
{
    return (
        <div>
        <header className="nav-background">
            <Navigation />
        </header>
        <section className="ec">
            <h1>Projects</h1>
        </section>
        <footer className="footer-container">
            <Bottom />
        </footer>
        </div>
    );
}

export default Projects;