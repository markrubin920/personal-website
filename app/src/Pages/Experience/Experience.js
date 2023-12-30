import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom"
import Fiserv from "../../Media/Cloud-Workshop-Picture.jpg"
import "../../Root/Root.css";
import "./Experience.css"

const Experience = () =>
{
    return (
        <div className="bg">
        <header className="nav-background">
            <Navigation />
        </header>
        <section className="exp-header">
            <div className="exp-header-div">
                <h1 className="exp-header-h1">Jobs, Activities, and Education</h1>
            </div>
        </section>
        <section className="exp">
            <div className="rows">
                <div className="columns">
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>6/23 - 8/23</h3></section>
                        <section className="company"><h2>Fiserv</h2></section>
                        <section className="desc"><p>Cloud Platform Operations Software Engineer Intern</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                    <div className="column">
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>2/22 - 11/23</h3></section>
                        <section className="company"><h2>Prince Analytics Sports Consulting</h2></section>
                        <section className="desc"><p>Founder & CEO</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>9/23 - Present</h3></section>
                        <section className="company"><h2>HackPrinceton</h2></section>
                        <section className="desc"><p>Development Team Leader</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                    </div>
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>9/23 - Present</h3></section>
                        <section className="company"><h2>TigerApps</h2></section>
                        <section className="desc"><p>Junior Software Developer</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>10/23 - Present</h3></section>
                        <section className="company"><h2>Scholars of Finance</h2></section>
                        <section className="desc"><p>Leadership Development Program</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>9/22 - 5/26 (Expected)</h3></section>
                        <section className="company"><h2>Princeton</h2></section>
                        <section className="desc"><p>Computer Science Major, School of engineering</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                </div>
            </div>

        </section>
        <footer className="footer-container">
            <Bottom />
        </footer>
        </div>
    );
}

export default Experience;