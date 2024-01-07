import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom";
import DrivingSimulator from "../../Media/Driving Simulator.png";
import Chip from "../../Media/Chip.jpg";
import Combine from "../../Media/CombineStats.png";
import Draft from "../../Media/NFL Draft.png";
import Web from "../../Media/Home Page.png";
import Streamlit from "../../Media/Streamlit Dashboard.png";
import ReportInfo from "../../Media/PDFs/Algorithms.pdf";
import "../../Root/Root.css";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="screen">
      <header className="nav-background">
        <Navigation />
      </header>
      <section className="projects-a">
        <div className="projects-a-div">
          <div className="title-a-div">
            <h1 className="title-a">Driving Simulator</h1>
            <h3 className="skills-a">Skills: Java, Java Swing</h3>
            <div className="link-div">
              <a
                href="https://github.com/markrubin920/Driving-Simulator"
                className="link-a"
              >
                Link to Repository
              </a>
            </div>
          </div>
          <div className="description-div">
            <p className="description">
              The driving simulator project was created to combine what I had
              learned from two classes my freshman fall semester, ‘The Coming of
              Driverless Cars’ seminar and ‘Computer Science: An
              Interdisciplinary Approach’. From what I had learned in the two
              courses, I decided to make my independent project for the computer
              science class a driving simulator to try to encapsulate a lot of
              the basic issues autonomous vehicle developers must deal with.{" "}
              <br></br>
              <br></br>
              When the user enters the simulator, they choose from a variety of
              road setups that are initially configured. The user then controls
              one of the cars, and there are typically 3-4 other cars in the
              environment as well that are autonomous. They were trained to stop
              at red lights, accelerate when it turns green, know which
              direction to turn so they stay on path, and stop moving when they
              hit a dead end. The user controls their car through the keyboard
              and must drive through the track without crashing or running
              through any red lights. <br></br>
              <br></br>
              At the time, this project was my first large computer science
              project and solidified my interest in the field as I really
              enjoyed building something this complex and seeing the power of
              programming objects to have certain behaviors.
            </p>
          </div>
          <div className="img-positioning-a">
            <img
              src={DrivingSimulator}
              alt="Driving Simulator Project"
              className="image-a"
            ></img>
          </div>
        </div>
      </section>

      <section className="projects-b">
        <div className="projects-b-div">
          <div className="img-positioning-a">
            <img src={Chip} alt="PUnC Project" className="image-a"></img>
          </div>
          <div className="description-div">
            <p className="description">
              My favorite class in college has been “Introduction to
              Contemporary Logic Design” because it really allowed me to
              understand <i>how</i> computing works. As the final project for
              the course, we were provided with 19 unique instructions such as
              add, branch, jump, etc. and needed to use Verilog to program a
              processor capable of running any assembly program using that
              instruction set on it. Ultimately, the project was successful, and
              I was able to run programs such as Euclid’s greatest common
              denominator algorithm and computing the modulus without division
              or subtraction. <br></br>
              <br></br>
              This project taught me a lot about chip design and how to plan out
              hardware design through drawing signal tables, data paths and
              state machines. It also made me more aware of the fundamental
              architecture of computers which will make me a better programmer
              by understanding how and why things work the way they do.{" "}
              <br></br>
              <br></br>I am currently working on the field programmable gate
              array (FPGA) implementation of this project to program my Verilog
              code onto actual hardware!
            </p>
          </div>
          <div className="title-a-div">
            <h1 className="title-a">Princeton University Computer (PUnC)</h1>
            <h3 className="skills-a">Skills: Verilog, Hardware Design</h3>
            <div className="link-div"></div>
          </div>
        </div>
      </section>

      <section className="projects-a">
        <div className="projects-a-div">
          <div className="title-a-div">
            <h1 className="title-a">
              NFL Draft Prospect Evaluation Algorithms
            </h1>
            <h3 className="skills-a">Skills: Statistical Data Analysis</h3>
            <div className="link-div">
              <a
                href={ReportInfo}
                download="NFL Draft Algorithm Intformation - Mark Rubin.pdf"
                className="link-a"
              >
                Link to Information
              </a>
            </div>
          </div>
          <div className="description-div">
            <p className="description">
              As someone who has always had an interest in sports analytics and
              understanding how to optimize roster composition particularly in
              the NFL, I began this project my freshman year of high school and
              continue it until this day. For this project, I collected both
              quantitative and qualitative data on over 1,800 NFL draft
              prospects from 2010-2019 in hopes of identifying the common
              denominators among successful and unsuccessful players in their
              transition to the professional level. From the trends I found, I
              created 12 multiplicative weights algorithms – one for each of
              position – that are capable of predicting “success”, as defined by
              making a player making a Pro Bowl at some point in their career,
              with over 60% accuracy and combining this with the conditional
              probability that player is a consensus first round pick raises the
              predictive power to nearly 81%. This more than doubles the current
              rate of NFL draft picks which by the same metric of success
              reaches only 37.6%. <br></br>
              <br></br>
              After completing the first edition of the algorithms, I
              cold-emailed NFL teams and garnered interest from several
              professional football data analysts whom I prepared a 19-page
              report for on the 2022 NFL Draft by their request. These
              algorithms are still used for developing reports on the draft each
              year and are maintaining their projected predictive power.
            </p>
          </div>
          <div className="img-positioning-a">
            <img src={Draft} alt="NFL Draft" className="image-a"></img>
          </div>
        </div>
      </section>

      <section className="projects-b">
        <div className="projects-b-div">
          <div className="img-positioning-a">
            <img src={Combine} alt="Combine Stats" className="image-a"></img>
          </div>
          <div className="description-div">
            <p className="description">
              The origins of this project date all the way back to high school,
              when I was manually collecting data on NFL draft prospects to be
              able to build algorithms to predict their success in the NFL – the
              project that led me to founding Prince Analytics Sports
              Consulting. I recognized that the large majority of my time was
              spent on data collection rather than algorithm building, and if I
              could speed up the data collection, my work would be far more
              efficient. From here, my brother and I teamed up to create a
              Python web scraper using the Beautiful Soup package to collect the
              data I needed.<br></br>
              <br></br>
              This project sped up my data collection workflow from months to
              just minutes. This was one of my earliest coding projects and made
              me realize the power of programming and automation scripting in
              creating efficiency. Investing the time to create processes early
              has massive time saving on the back end.
            </p>
          </div>
          <div className="title-a-div">
            <h1 className="title-a">NFL Combine Data Webscraper</h1>
            <h3 className="skills-a">Skills: Python, Beautiful Soup Package</h3>
            <div className="link-div">
              <a
                href="https://github.com/markrubin920/NFL-Combine-Webscraper"
                className="link-a"
              >
                Link to Repository
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-a">
        <div className="projects-a-div">
          <div className="title-a-div">
            <h1 className="title-a">Personal Website</h1>
            <h3 className="skills-a">Skills: React JS, Tailwind CSS</h3>
            <div className="link-div">
              <a
                href="https://github.com/markrubin920/personal-website"
                className="link-a"
              >
                Link to Repository
              </a>
            </div>
          </div>
          <div className="description-div">
            <p className="description">
              This personal website was developed to be able to showcase the
              work I’ve done and allow others to get to learn more about me. It
              was the largest frontend project I’ve done as the sole developer
              which taught me a lot about not just building functionality but
              also user experience design, device compatibility and so much
              more. This project was developed using React JS and tailwind CSS
              over winter break. <br></br>
              <br></br>
              Building this personal website allowed me to gain a better
              understanding of how to develop a product all the way from design
              mockups to figuring out hosting and taught me to think even more
              about the small details that are crucial in the software
              development life cycle.
            </p>
          </div>
          <div className="img-positioning-a">
            <img src={Web} alt="Personal Website" className="image-a"></img>
          </div>
        </div>
      </section>

      <section className="projects-b">
        <div className="projects-b-div">
          <div className="img-positioning-a">
            <img
              src={Streamlit}
              alt="Streamlit Dashboard"
              className="image-a"
            ></img>
          </div>
          <div className="description-div">
            <p className="description">
              For this project, I was given a dataset of 900 GitHub repositories
              with details on their stars, watchers, contributors, pull
              requests, etc. The prompt for the project was to find an
              interesting theme in the data and create a dashboard using the
              Streamlit platform to convey the trend I found in about three
              hours.<br></br>
              <br></br>
              From analyzing the data using STATA, I recognized that the
              repositories using less popular programming languages measured by
              their frequency in the repository data tended to receive more
              stars and less contributors on average, but the more common
              programming languages like JavaScript or Python had more
              contributors and less stars. This indicated more interactivity
              with repositories of popular programming languages and more use of
              GitHub repositories for coding help from programmers using less
              popular languages.<br></br>
              <br></br>
              From this trend, I created the tag line “Niche Coding Communities
              Call GitHub for Help, More Popular Languages Use it for Fun and
              Creativity” to immediately explain the trend I found. This was
              followed by scatter plots, bar charts and a data table that
              clearly demonstrated this idea. The project taught me how to more
              effectively use data to tell a story and gave me familiarity with
              a new Python package with powerful data capabilities.
            </p>
          </div>
          <div className="title-a-div">
            <h1 className="title-a">GitHub Data Dashboard</h1>
            <h3 className="skills-a">
              Skills: Python, STATA, Streamlit Package, Pandas Package
            </h3>
            <div className="link-div">
              <a
                href="https://github.com/markrubin920/streamlit-github-dashboard"
                className="link-a"
              >
                Link to Repository
              </a>
            </div>
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
