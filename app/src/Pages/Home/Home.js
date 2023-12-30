import "./Home.css";
import Navigation from "../../Components/Navigation/Navigation";
import Fiserv from "../../Media/Fiserv-Picture.jpg"
import Workshop from "../../Media/Cloud-Workshop-Picture.jpg"
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
                    <div className="writing">
                        <div className="exp-title"><h1>Work Experience</h1> </div>
                        <div className="exp-subtitle"><h1>BLA BLA BLA experience</h1> </div>
                        <div className="learn-more"><NavLink to = "/experience">Learn More</NavLink></div>
                    </div>
                    <div className="pic-div">
                        <img src={Fiserv} alt = "Fiserv Internship Picture" className="exp-pic"/>
                    </div>
                </div>
            </section>

            <section className="ec-container">
                <div className="ec-div-outer">
                    <div className="pic-div">
                        <img src={Workshop} alt = "Cloud Computing Workshop" className="exp-pic"/>
                    </div>
                    <div className="writing">
                        <div className="ec-title"><h1>Extracurricular Activities</h1> </div>
                        <div className="ec-subtitle"><h1>BLA BLA BLA Activities</h1> </div>
                        <div className="learn-more"><NavLink to = "/extracurriculars">Learn More</NavLink></div>
                    </div>
                </div>
            </section>
            <section className="quote-section">
                <p className="quote-text">
                    BLA BLA BLA
                </p>
            </section>
            <section className="contact-container">
                <div className="get-in-touch">
                    <h2 className="gt-text">Let's get in touch!</h2>
                </div>
                <div className="contact-info">
                    <ul className="contact-list">
                        <li><h2>Contact Information</h2></li>
                        <li><a href="mailto:markrubin920@gmail.com" className="contact">Email markrubin920@gmail.com</a></li>
                        <li><a href="linkedin.com" className="contact">LinkedIn: Mark Rubin</a></li>
                        <li><a href="github.com" className="contact">GitHub: markrubin920</a></li>
                    </ul>
                </div>
            </section>
            <section className="footer-container">
                {/* <BottomContainer /> */}
            </section>
        </div>
    )
}

export default Home;