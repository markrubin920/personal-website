import Navigation from "../../Components/Navigation/Navigation";
import Bottom from "../../Components/Bottom Container/Bottom";
import FiservPic from "../../Media/Cloud-Workshop-Picture.jpg";
import ExperienceContainer from "./ExperienceContainer.js";
import "../../Root/Root.css";
import "./Experience.css";
import { useState } from "react";
import Fiserv from "./Fiserv/Fiserv.js";

const Experience = () => {
  const [showFiserv, setShowFiserv] = useState(false);
  const [showPA, setShowPA] = useState(false);
  const [showHP, setShowHP] = useState(false);
  const [showTA, setShowTA] = useState(false);
  const [showSOF, setShowSOF] = useState(false);
  const [showPton, setShowPton] = useState(false);

  const ToggleFiservModal = () => {
    setShowFiserv(!showFiserv);
  };

  const TogglePAModal = () => {
    setShowPA(!showPA);
  };

  const ToggleHPModal = () => {
    setShowHP(!showHP);
  };

  const ToggleTAModal = () => {
    setShowTA(!showTA);
  };

  const ToggleSOFModal = () => {
    setShowSOF(!showSOF);
  };

  const TogglePtonModal = () => {
    setShowPton(!showPton);
  };

  return (
    <div className="bg">
      <header className="nav-background">
        <Navigation />
      </header>

      <section className="exp-header">
        <div className="exp-header-div">
          <h1 className="exp-header-h1">
            Employment, Activities, and Education
          </h1>
        </div>
      </section>

      <section className="exp">
        <div className="rows">
          {showFiserv && (
            <div className="modal-overlay">
              <div className="modal-content">
                <Fiserv onClickFunction={ToggleFiservModal} />
              </div>
            </div>
          )}

          <div className="columns">
            <div className="column">
              <ExperienceContainer
                onClickFunction={ToggleFiservModal}
                image={FiservPic}
                date="6/23 - 8/23"
                company="Fiserv"
                description="Cloud Platform Operations Software Engineer Intern"
              />
            </div>
            <div className="column">
              <div className="column">
                <ExperienceContainer
                  onClickFunction={TogglePAModal}
                  image={FiservPic}
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
                  onClickFunction={ToggleHPModal}
                  image={FiservPic}
                  date="9/23 - Present"
                  company="HackPrinceton"
                  description="Development Team Leader"
                />
              </div>
            </div>
            <div className="column">
              <ExperienceContainer
                onClickFunction={ToggleTAModal}
                image={FiservPic}
                date="9/23 - Present"
                company="TigerApps"
                description="Junior Software Developer"
              />
            </div>
          </div>
          <div className="columns">
            <div className="column">
              <ExperienceContainer
                onClickFunction={ToggleSOFModal}
                image={FiservPic}
                date="10/23 - Present"
                company="Scholars of Finance"
                description="Leadership Development Program"
              />
            </div>
            <div className="column">
              <ExperienceContainer
                onClickFunction={TogglePtonModal}
                image={FiservPic}
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
