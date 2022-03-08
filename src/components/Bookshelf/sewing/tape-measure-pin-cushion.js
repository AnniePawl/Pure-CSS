import React from "react";
import "./tape-measure-pin-cushion.scss";

function TapeMeasurePinCushion() {
  return (
    <div className="tmpc-container">
      <div className="tape-measure">
        <div className="tape-measure-left"></div>
        <div className="tape-measure-right"></div>
      </div>
      <div className="pin-cushion">
        <div className="pin-cushion-top"></div>
        <div className="pin-cushion-bottom"></div>
      </div>
    </div>
  );
}

export default TapeMeasurePinCushion;
