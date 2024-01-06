import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom";
import Headshot from "../../Media/Tree Pic.JPG";
import "../../Root/Root.css";
import "./About.css";

const About = () => {
  return (
    <div>
      <header className="nav-background">
        <Navigation />
      </header>
      <div className="about-me-container">
        <div className="text-section">
          <h1 className="about-me-h1">About Me</h1>
          <p className="about-me-p">
            My name is Mark Rubin, a sophomore at Princeton University from
            Highland Park, New Jersey majoring in computer science in the school
            of engineering. I entered STEM through an independent project that I
            began in my freshman year of high school, combining two of my
            largest interests: sports and data. The goal of the project was to
            build algorithms for predicting the success of National Football
            League (NFL) draft prospects. After three years of working on the
            project, I connected with several NFL data analysts and developed a
            report for them on the 2022 Draft Class. Around that time, I took my
            first computer science course, and my passion for data science
            naturally extended into a love for computer science – I enjoyed that
            it is a field where I am constantly learning and can build something
            from nothing. <br></br>
            <br></br>After graduating as Valedictorian of my high school class,
            I decided to attend Princeton University where I truly appreciate
            the variety of rigorous courses I have been able to take. While I am
            still early in my college career, I feel like I have grown not just
            as a coder but also as a student and person, learning new ways to
            think about the world. This past summer, I had my first opportunity
            to explore software engineering in an internship at Fiserv. The
            internship solidified my passion for the field, and greatly
            accelerated my growth by enabling me to understand the wide scope of
            technology in large companies.
            <br></br>
            <br></br>Outside of technology, I enjoy working out and playing
            sports like football and baseball with friends and family. My
            defining characteristics are my determination, integrity,
            leadership, reliability and emphasis on teamwork, and I pride myself
            on carrying these traits into everything I do. <br></br>
            <br></br>In the future, I hope to continue to pursue the things I
            love and grow more as I progress through my education and career. I
            believe the outlook of technology is extremely exciting so I look
            forward to continuing to explore the field in the near future!
          </p>
        </div>
        <div className="image-section">
          <img src={Headshot} alt="headshot" className="headshot-pic"></img>
        </div>
      </div>

      {/* <section className="about-me-container">
        <div className="text">
          <h1 className="about-me-h1">About Me</h1>
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
      </section> */}
      <Bottom />
    </div>
  );
};

export default About;
