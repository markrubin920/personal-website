import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom";
import Headshot from "../../Media/Headshot-Square.JPG";
import "../../Root/Root.css";
import "./About.css";

const About = () => {
  return (
    <div>
      <header className="nav-background">
        <Navigation />
      </header>
      <section className="about-me-container">
        <div className="text">
          <h1 className="about-me-h1">
            <u>About Me</u>
          </h1>
          <p className="about-me-p">
            As a sophomore studying computer science at Princeton University, I
            find myself immersed in a world that perfectly blends academic rigor
            with innovation. My days are a juggling act between intense coding
            sessions, engaging lectures, and the collaborative spirit that
            thrives on campus. <br></br>
            <br></br>Princeton's picturesque setting is a stark contrast to the
            complexity of my studies. Walking through the historic campus, I am
            constantly inspired by the blend of traditional Gothic architecture
            and the cutting-edge research that happens within these walls. My
            major, computer science, is not just about understanding programming
            languages; it’s a deep dive into problem-solving and thinking
            algorithmically. <br></br>
            <br></br>Courses like 'Algorithms and Data Structures' challenge me
            to think critically about efficiency and design. Here, I don’t just
            learn how to code; I learn to innovate and apply these skills to
            real-world problems. Collaborative projects with my peers are an
            integral part of my learning experience, allowing us to exchange
            diverse perspectives and ideas. <br></br>
            <br></br>Balancing my academic life with extracurricular activities,
            I am part of the coding club where we often participate in
            hackathons. These events are exhilarating, pushing us to our limits
            as we try to develop functional software or solve complex problems
            within a limited timeframe. <br></br>
            <br></br>As I progress through my sophomore year, I realize that
            Princeton is not just shaping me into a skilled programmer, but a
            thinker who can apply computer science principles to a broader
            context. The university’s ethos of 'in the nation's service and in
            the service of humanity' resonates deeply with me, fueling my
            ambition to use technology for societal good.
          </p>
        </div>
        <div className="picture">
          <img src={Headshot} alt="headshot" className="headshot-pic"></img>
        </div>
      </section>
      <footer className="footer-container">
        <Bottom />
      </footer>
    </div>
  );
};

export default About;
