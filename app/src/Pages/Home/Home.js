import "./Home.css";
import Navigation from "../../Components/Navigation/Navigation";
import Fiserv from "../../Media/Fiserv-Picture.jpg"
import { NavLink } from "react-router-dom";

const Home = () =>
{
    return (
        <div className="app">
            <section className="top-container">
                <Navigation />
                <div className="tc-writing">
                    <h2 className="hello">
                        Hi, my name is<br></br>Mark Rubin
                    </h2>
                </div>
            </section>
            <section className="about-container">
                <p className="about-text">
                    BLA BLA BLA
                </p>
            </section>
            <section className="exp-container">
                <div className="experience-div-outer">
                    <div className="exp-writing">
                        <div className="exp-title"><h1>Work Experience</h1> </div>
                        <div className="exp-subtitle"><h1>BLA BLA BLA experience</h1> </div>
                        <div className="learn-more"><NavLink to = "/experience">Learn More</NavLink></div>
                    </div>
                    <div className="experience-pic-div">
                        <img src={Fiserv} alt = "Fiserv Internship Picture" className="exp-pic"/>
                    </div>
                </div>
                
            </section>
        </div>
    )
}

export default Home;