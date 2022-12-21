import React from "react";
import { ReactDOM } from "react";

function handlePoint() {
  // let pointsbool=true;
  // return(
  //     pointsbool
  // );
  if (!document.getElementById("pointbutton").classList.contains("active")) {
    document.getElementById("pointbutton").classList.add("active");
    document.getElementById("polygonbutton").classList.remove("active");
  } else {
    document.getElementById("pointbutton").classList.remove("active");
  }
}

export default handlePoint;
