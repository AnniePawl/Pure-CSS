import React from "react";
import "./cat.scss";

export default function Cat() {
  return (
    <div className="cat__container">
      <div className="cat">
        <div className="cat__ears">
          <div className="cat__ear"></div>
          <div className="cat__ear"></div>
        </div>
        <div className="cat__head">
          <div className="cat__eye"></div>
          <div className="cat__eye"></div>
        </div>
        <div className="cat__body">
          <div className="body"></div>
          <div className="body"></div>
          <div className="body"></div>
        </div>
        <div className="cat__tail">
          <div className="cat__tail1"></div>
          <div className="cat__tail2"></div>
        </div>
      </div>
    </div>
  );
}
