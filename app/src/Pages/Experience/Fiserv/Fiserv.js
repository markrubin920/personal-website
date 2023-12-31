import "../Modal.css";
import "./Fiserv.css";
import { useState } from "react";

const Fiserv = ({ onClickFunction }) => {
  return (
    <div className="outer">
      <div className="headline-div">
        <h1>Fiserv</h1>
      </div>
      <div className="button-div">
        <button onClick={onClickFunction}>Close</button>
      </div>
    </div>
  );
};

export default Fiserv;
