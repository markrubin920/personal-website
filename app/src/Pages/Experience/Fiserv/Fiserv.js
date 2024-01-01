import "../Modal.css";
import "./Fiserv.css";
import { useState } from "react";

const Fiserv = ({ onClickFunction }) => {
  return (
    <div className="outer">
      <header className="headline-div">
        <h1>Fiserv</h1>
      </header>
      <section className="role">
        <h1 className="role-h1">
          Position: Cloud Platform Operations Software Engineer Intern (6/23 -
          8/23)
        </h1>
      </section>
      <section className="responsibilities">
        <h1 className="responsibilities-h1">Responsibilities</h1>
      </section>
      <section className="media-content">
        <div className="media-content-div">
          <h1>Media 1</h1>
        </div>
        <div></div>
        <div className="media-content-div">
          <h1>Media 2</h1>
        </div>
      </section>
      <footer className="button-div">
        <button onClick={onClickFunction}>Close</button>
      </footer>
    </div>
  );
};

export default Fiserv;
