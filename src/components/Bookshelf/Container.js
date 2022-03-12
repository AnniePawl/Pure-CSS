import React from "react";
import "./container.scss";

function Container(props) {
  const { item } = props;
  return <div className="container">{item}</div>;
}

export default Container;
