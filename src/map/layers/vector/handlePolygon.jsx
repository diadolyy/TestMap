import React from "react";

function handlePolygon() {
  if (!document.getElementById("polygonbutton").classList.contains("active")) {
    document.getElementById("pointbutton").classList.remove("active");
    document.getElementById("polygonbutton").classList.add("active");
  } else {
    document.getElementById("polygonbutton").classList.add("new");
    document.getElementById("polygonbutton").classList.remove("active");
  }
}

export default handlePolygon;
