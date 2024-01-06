import "../Modal.css";
import X from "../../../Media/Black X.png";
import SOFLogo from "../../../Media/SOF-Logo.jpg";

const SOF = ({ onClickFunction }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="outer">
          <header className="headline-div">
            <h1 className="fiserv">Scholars of Finance</h1>
          </header>
          <section className="role">
            <h1 className="role-h1">
              Position: Leadership Development Program (10/23 - Present)
            </h1>
          </section>
          <div className="content">
            <div className="responsibilities">
              <h1 className="responsibilities-h1">Accomplishments</h1>
              <ul className="accomplishments-ul">
                <li className="accomplishments-li">
                  Partook in a 7-week leadership development program in a cohort
                  of 11 students.
                </li>
                <li className="accomplishments-li">
                  Sessions focused on discussing our values, forming personal
                  mission statements and discussing methods for prioritizing
                  ethical principles in professional and personal situations.
                </li>
                <li className="accomplishments-li">
                  Completed weekly reflection exercises based on readings and
                  videos from the program.
                </li>
              </ul>
            </div>
            <div className="media-content">
              <div className="media-content-div">
                <a href="https://scholarsoffinance.org/">
                  <img
                    src={SOFLogo}
                    alt="SOF Home Page"
                    className="presentation-picture"
                  ></img>
                </a>
                <p>Click on picture to view website</p>
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

export default SOF;
