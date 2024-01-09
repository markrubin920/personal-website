import "../Modal.css";
import X from "../../../Media/Black X.png";
import DraftCover from "../../../Media/Cover Page NFL.jpg";
import NBA from "../../../Media/Bufkin Report Cover.png";
import Report from "../../../Media/PDFs/Keyonte George.pdf";
import NFLReport from "../../../Media/PDFs/2022 Report.pdf";

// Modal for PrinceAnalytics
const PrinceAnalytics = ({ onClickFunction }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="outer">
          <header className="headline-div-pa">
            <h1 className="company-name">Prince Analytics Sports Consulting</h1>
          </header>
          <section className="role">
            <h1 className="role-h1">Position: Founder & CEO (2/22 - 11/23)</h1>
          </section>
          <div className="content">
            <div className="responsibilities">
              <h1 className="responsibilities-h1">Accomplishments</h1>
              {/* List of accomplishments */}
              <ul className="accomplishments-ul">
                <li className="accomplishments-li">
                  Founded a startup company focused on making data-driven
                  decisions in sports to achieve better outcomes through the
                  numbers that matter.
                </li>
                <li className="accomplishments-li">
                  Networked with industry professionals to receive consulting
                  opportunities across two professional sports leagues.
                </li>
                <li className="accomplishments-li">
                  Prepared a 19-page report for NFL data analysts from several
                  teams with evaluations and grades on nearly 300 players
                  utilizing self-made algorithms capable of predicting player
                  success with up to 81% accuracy (more information on
                  algorithms in projects section).
                </li>
                <li className="accomplishments-li">
                  Produced four reports for a prominent NBA agency on top 2023
                  NBA draft prospects designed to convey the value of players to
                  be presented to professional teams.
                </li>
              </ul>
            </div>
            {/* Media Content */}
            <div className="media-content">
              <div className="media-content-div">
                <a href={NFLReport} download="2022 Draft Report.pdf">
                  <img
                    src={DraftCover}
                    alt="NFL Draft Report Cover"
                    className="presentation-picture"
                  ></img>
                </a>
                <p>Click on picture to view report</p>
              </div>
              <div className="media-content-div">
                <a href={Report} download="Keyonte George Report.pdf">
                  <img
                    src={NBA}
                    alt="Kobe Bufkin Draft Report"
                    className="presentation-picture"
                  ></img>
                </a>
                <p>Click on picture to view report</p>
              </div>
            </div>
          </div>
          <footer className="button-div">
            <button onClick={onClickFunction} className="ex-button">
              <img src={X} alt="Black X" className="ex-button-img"></img>
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default PrinceAnalytics;
