import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card framework">
          <div className="card-body">
            <Weather />
          </div>
        </div>
      </div>
    </div>
  );
}
