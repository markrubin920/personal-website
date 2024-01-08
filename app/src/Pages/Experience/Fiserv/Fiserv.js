import "../Modal.css";
import X from "../../../Media/Black X.png";
import Presentation from "../../../Media/EOI Presentation.png";
import Interns from "../../../Media/Fiserv Group Picture.jpg";
import EOI from "../../../Media/PDFs/EOI.pdf";

// Modal about Fiserv Experience
const Fiserv = ({ onClickFunction }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="outer">
          <header className="headline-div">
            <h1 className="company-name">Fiserv</h1>
          </header>
          <section className="role">
            <h1 className="role-h1">
              Position: Cloud Platform Operations Software Engineer Intern (6/23
              - 8/23)
            </h1>
          </section>
          <div className="content">
            <div className="responsibilities">
              <h1 className="responsibilities-h1">Accomplishments</h1>
              {/* List of accomplishments */}
              <ul className="accomplishments-ul">
                <li className="accomplishments-li">
                  Proposed and built a ServiceNow Ticket fulfillment system to
                  automate approval of developers' access to Azure RedHat
                  OpenShift projects using Python, JavaScript, Azure DevOps
                  Pipelines and Microsoft Power Automate, reducing time spent on
                  approvals from 3 hours to under 5 minutes weekly.
                </li>
                <li className="accomplishments-li">
                  Generated Bash scripts to automate installation of
                  cybersecurity software installation on virtual machines,
                  efficiently fulfilling a cloud cybersecurity mandate, reducing
                  manual work time.
                </li>
                <li className="accomplishments-li">
                  Developed a Python program to remove inactive users from
                  Kubernetes clusters leveraging the OpenShift CLI and
                  subprocess Python package, reducing potential security threats
                  and concerns during quarterly audits.
                </li>
                <li className="accomplishments-li">
                  Composed several Bash and Python scripts to automate developer
                  tasks such as namespace creation and resource partitioning in
                  Azure RedHat OpenShift, service principal rotation in
                  Microsoft Azure, and taking thread and heap dumps for
                  debugging applications, speeding up developer workflow.
                </li>
                <li className="accomplishments-li">
                  Organized one-on-one learning sessions with employees around
                  the company to gain a greater understanding of full stack
                  development, the software development life cycle and
                  technologies such as Spring Boot and React JS.
                </li>
              </ul>
            </div>
            {/* Media Content */}
            <div className="media-content">
              <div className="media-content-div">
                <a href={EOI} download="End-of-Internship-Presentation.pdf">
                  <img
                    src={Presentation}
                    alt="End of Internship Presentation"
                    className="presentation-picture"
                  ></img>
                </a>
                <p>Click on picture to view presentation</p>
              </div>
              <div></div>
              <div className="media-content-div">
                <div className="intern-picture-div">
                  <img
                    src={Interns}
                    alt="Intern Group"
                    className="presentation-picture"
                  ></img>
                </div>
              </div>
            </div>
          </div>
          {/* Exit button */}
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

export default Fiserv;
