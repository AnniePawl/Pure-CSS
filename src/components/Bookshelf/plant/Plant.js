import React from "react";
import "./plant.scss";

function Plant(props) {
  let { cn } = props;
  return (
    <div className={`plant-container ${cn}`}>
      <div className="plant-leaf"></div>

      <div className="plant-pot"></div>
    </div>
  );
}

export default Plant;
