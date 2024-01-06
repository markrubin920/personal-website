import "../Modal.css";
import X from "../../../Media/Black X.png";
import TigerAppsHome from "../../../Media/TigerApps Home.png";

const TigerApps = ({ onClickFunction }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="outer">
          <header className="headline-div">
            <h1 className="fiserv">TigerApps</h1>
          </header>
          <section className="role">
            <h1 className="role-h1">
              Position: Junior Software Developer (9/23 - Present)
            </h1>
          </section>
          <div className="content">
            <div className="responsibilities">
              <h1 className="responsibilities-h1">Accomplishments</h1>
              <ul className="accomplishments-ul">
                <li className="accomplishments-li">
                  Maintaining a suite of 16 web applications for Princeton
                  students, contributing in areas such as application hosting
                  and bug report fixing.
                </li>
                <li className="accomplishments-li">
                  Assisting in interviewing candidates for new TigerApps and
                  helping onboard new applications by reading through code,
                  creating documentation and building the application to be
                  hosted on Heroku.
                </li>
              </ul>
            </div>
            <div className="media-content">
              <div className="media-content-div">
                <a href="https://tigerapps.org/">
                  <img
                    src={TigerAppsHome}
                    alt="TigerApps Home Page"
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

export default TigerApps;
