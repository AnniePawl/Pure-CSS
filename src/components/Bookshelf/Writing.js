import React from "react";
import "./writing.scss";

function Writing() {
  return (
    <div className="writing-container">
      <div className="paper"></div>
      {/* <div className="notebook notebook1"></div>
      <div className="notebook notebook2"></div> */}
      <div className="cup-container">
        <div className="cup-contents">
          <div className="ruler cup-contents-1"></div>
          <div className="pen cup-contents-2"></div>
          <div className="pencil pencil-1 cup-contents-3"></div>
          <div className="pencil pencil-2 cup-contents-4"></div>
        </div>
        <div className="cup"></div>
      </div>
    </div>
  );
}

export default Writing;
