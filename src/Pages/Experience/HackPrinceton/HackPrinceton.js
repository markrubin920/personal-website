import "../Modal.css";
import X from "../../../Media/Black X.png";
import Cloud from "../../../Media/Cloud Workshop.png";
import CloudPresentation from "../../../Media/PDFs/Intro to Cloud Computing.pdf";

// Modal about HackPrinceton Experience
const HackPrinceton = ({ onClickFunction }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="outer">
          <header className="headline-div">
            <h1 className="company-name">HackPrinceton</h1>
          </header>
          <section className="role">
            <h1 className="role-h1">
              Position: Development Team Leader and Software Engineer (9/23 -
              Present)
            </h1>
          </section>
          <div className="content">
            <div className="responsibilities">
              <h1 className="responsibilities-h1">Accomplishments</h1>
              {/* List of accomplishments */}
              <ul className="accomplishments-ul">
                <li className="accomplishments-li">
                  Collaborating with a team of five developers to rewrite the
                  hackathon’s application website using React and Next JS.
                </li>
                <li className="accomplishments-li">
                  Delivered a 45-minute presentation on cloud computing at the
                  hackathon with over 40 people in attendance.
                </li>
                <li className="accomplishments-li">
                  Contributed to organization of hackathon, directing hackers on
                  navigating the building and campus and ensuring hackathon
                  events ran smoothly
                </li>
              </ul>
            </div>
            {/* Media content */}
            <div className="media-content">
              <div className="media-content-div">
                <a
                  href={CloudPresentation}
                  download="Intro to Cloud Computing.pdf"
                >
                  <img
                    src={Cloud}
                    alt="Cloud Computing Workshop"
                    className="presentation-picture"
                  ></img>
                </a>
                <p>Click on picture to view presentation</p>
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

export default HackPrinceton;
