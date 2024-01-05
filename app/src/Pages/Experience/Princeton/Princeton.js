import "../Modal.css";
import "./Princeton.css";
import X from "../../../Media/Black X.png";
import PrincetonPicture from "../../../Media/Princeton Logo.png";

const Princeton = ({ onClickFunction }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="outer">
          <header className="headline-div">
            <h1 className="fiserv">Princeton University</h1>
          </header>
          <section className="role">
            <h1 className="role-h1">
              Sophomore -- Bachelor of Science in Engineering, Computer Science
              Major<br></br>GPA: 3.85
            </h1>
          </section>
          <div className="content">
            <div className="responsibilities">
              <h1 className="responsibilities-h1">Accomplishments</h1>
              <ul className="accomplishments-ul">
                <li className="accomplishments-li">
                  Pursuing a Bachelors of Science in Engineering degree
                  concentrating in Computer Science with focuses on computer
                  engineering and economics.
                </li>
                <li className="accomplishments-li">
                  Developed a strong understanding of the intersection of
                  various fields through interdisciplinary course work,
                  developing my interests in software development, computer
                  architecture, renewable energy, finance and policy.
                </li>
              </ul>
            </div>
            <div className="media-content">
              <div className="media-content-div">
                <a href="temporarylink.com">
                  <img
                    src={PrincetonPicture}
                    alt="NFL Draft Report Cover"
                    className="presentation-picture"
                  ></img>
                </a>
                <p>Click on picture to view transcript</p>
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

export default Princeton;
