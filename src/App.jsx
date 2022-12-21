import React from "react";
import { Map } from "./map";
import logo from "./logo.svg";
import "./App.css";
import handlePoint from "./map/layers/vector/handlePoint";
import handlePolygon from "./map/layers/vector/handlePolygon";

function App() {
  return (
    <div className="container">
      <Map></Map>
      <div className="options">
        <button id="pointbutton" onClick={handlePoint}>
          Ставить точки
        </button>
        <button id="polygonbutton" onClick={handlePolygon}>
          Рисовать контур
        </button>
        <span>Точек в контуре:</span>
        <span id="points-amount">0</span>
      </div>
    </div>
  );
}

export default App;
