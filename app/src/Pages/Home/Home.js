import "./Home.css";
import Bottom from "../../Components/Bottom Container/Bottom";
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
                    <div className="about-button-div"><NavLink to = "/about">About Me</NavLink></div>
                </div>
            </section>
            <section className="about-container">
                <div className="about-div">
                <p className="about-text">
                A young man at Princeton University, deeply immersed in the realm of computer science, is a picture of determination and intelligence. His days are filled with coding, algorithmic challenges, and exploring the latest in artificial intelligence. He's passionate about technology's potential and dreams of innovating in the tech world.
                </p>
                </div>
            </section>
            <section className="exp-container">
                <div className="experience-div-outer">
                    <div className="writing">
                        <div className="exp-title"><h1>Work Experience</h1> </div>
                        <div className="exp-subtitle"><h1>
In my software engineering internships, I've honed my coding and problem-solving skills, learned to navigate complex projects, and gained insights into the software development lifecycle and industry best practices.</h1> </div>
                        <div className="learn-more"><NavLink to = "/experience">Learn More</NavLink></div>
                    </div>
                    <div className="pic-div">
                        <img src={Fiserv} alt = "Fiserv Internship" className="exp-pic"/>
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
                        <div className="ec-subtitle"><h1>
My extracurricular activities have sharpened my programming skills, enhanced my public speaking, and refined my thinking. They've taught me to approach problems creatively, communicate ideas effectively, and continuously adapt and learn, enriching both my technical and interpersonal abilities.</h1> </div>
                        <div className="learn-more"><NavLink to = "/extracurriculars">Learn More</NavLink></div>
                    </div>
                </div>
            </section>
            <section className="quote-section">
                <p className="quote-text">
                Mark is an extraordinary programmer, consistently showcasing exceptional skill, innovative thinking, and advanced problem-solving abilities. His coding projects reflect a deep understanding of complex concepts and a commitment to excellence in software development.
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
                <Bottom />
            </section>
        </div>
    )
}

export default Home;