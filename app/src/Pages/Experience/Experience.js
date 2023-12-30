import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom";
import Fiserv from "../../Media/Cloud-Workshop-Picture.jpg";
import ExperienceContainer from "./ExperienceContainer.js";
import "../../Root/Root.css";
import "./Experience.css";
import { useState } from "react";

const Experience = () => {
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
              <ExperienceContainer
                experience="fiserv"
                image={Fiserv}
                date="6/23 - 8/23"
                company="Fiserv"
                description="Cloud Platform Operations Software Engineer Intern"
              />
            </div>
            <div className="column">
              <div className="column">
                <ExperienceContainer
                  experience="princeanalytics"
                  image={Fiserv}
                  date="2/22 - 11/23"
                  company="Prince Analytics Sports Consulting"
                  description="Founder & CEO"
                />
              </div>
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <div className="column">
                <ExperienceContainer
                  experience="hackprinceton"
                  image={Fiserv}
                  date="9/23 - Present"
                  company="HackPrinceton"
                  description="Development Team Leader"
                />
              </div>
            </div>
            <div className="column">
              <ExperienceContainer
                experience="tigerapps"
                image={Fiserv}
                date="9/23 - Present"
                company="TigerApps"
                description="Junior Software Developer"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <ExperienceContainer
                experience="sof"
                image={Fiserv}
                date="10/23 - Present"
                company="Scholars of Finance"
                description="Leadership Development Program"
              />
            </div>
            <div className="column">
              <ExperienceContainer
                experience="princeton"
                image={Fiserv}
                date="9/22 - 5/26 (Expected)"
                company="Princeton"
                description="Computer Science, School of Engineering"
              />
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

export default Experience;
