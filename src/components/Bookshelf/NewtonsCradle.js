import React from "react";
import "./newtons-cradle.scss";

function NewtonsCradle() {
  return (
    <div className="newtonsCradle">
      <div className="frame">
        <div className="sphere"></div>
        <div className="sphere"></div>
        <div className="sphere"></div>
        <div className="sphere"></div>
        <div className="sphere"></div>
      </div>
      <div className="base"></div>
    </div>
  );
}

export default NewtonsCradle;
