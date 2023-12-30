import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom"
import Fiserv from "../../Media/Cloud-Workshop-Picture.jpg"
import "../../Root/Root.css";
import "./Experience.css"

const Experience = () =>
{
    return (
        <div>
        <header className="nav-background">
            <Navigation />
        </header>
        <section className="exp">
            <div className="rows">
                <div className="columns">
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>Dates</h3></section>
                        <section className="company"><h2>Fiserv</h2></section>
                        <section className="desc"><p>Short Description</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                    <div className="column">
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>Dates</h3></section>
                        <section className="company"><h2>Fiserv</h2></section>
                        <section className="desc"><p>Short Description</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>Dates</h3></section>
                        <section className="company"><h2>Fiserv</h2></section>
                        <section className="desc"><p>Short Description</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                    </div>
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>Dates</h3></section>
                        <section className="company"><h2>Fiserv</h2></section>
                        <section className="desc"><p>Short Description</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                </div>
                <div className="columns">
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>Dates</h3></section>
                        <section className="company"><h2>Fiserv</h2></section>
                        <section className="desc"><p>Short Description</p></section>
                        <section className="learn"><p>Learn More</p></section>
                    </div>
                    <div className="column">
                        <section className="pic"><img src = {Fiserv} alt = "Fiserv" className="fi-image"/></section>
                        <section className="date"><h3>Dates</h3></section>
                        <section className="company"><h2>Fiserv</h2></section>
                        <section className="desc"><p>Short Description</p></section>
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