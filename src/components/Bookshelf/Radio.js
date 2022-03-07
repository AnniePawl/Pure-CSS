import React, { useState } from "react";
import "./radio.scss";

function Radio() {
  const [station, setStation] = useState(105.9);
  return (
    <div className="radio-container">
      <div className="radio-top"></div>
      <div className="radio-bottom">
        <div className="radio-display">
          <div className="radio-display-station">{station}</div>
          <div className="radio-buttons">
            <button
              className="radio-button"
              onClick={() => setStation(station + 0.5)}
            >
              -
            </button>

            <button
              className="radio-button"
              onClick={() => {
                setStation(station - 0.5);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Radio;
