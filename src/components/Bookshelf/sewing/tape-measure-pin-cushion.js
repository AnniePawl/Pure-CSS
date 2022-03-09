import React from "react";
import "./tape-measure-pin-cushion.scss";
import PinCushion from "./PinCushion";

function TapeMeasurePinCushion() {
  return (
    <div className="tmpc-container">
      <div className="tape-measure">
        <div className="tape-measure-left"></div>
        <div className="tape-measure-right"></div>
      </div>

      <PinCushion />
    </div>
  );
}

export default TapeMeasurePinCushion;
