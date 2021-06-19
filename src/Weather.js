import React, { useState } from "react";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    alert(city);
  }
  return (
    <div className="Weather">
      <div className="Temperature">
        <h1>
          <div className="row">
            <div className="col-6">Edinburgh</div>
            <div className="col-6 todaysDegrees">
              18 ℃
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt="weather"
                className="weatherIcon"
              />
            </div>
          </div>
        </h1>
        <h4>
          <div className="row">
            <div className="col-6">9th June 10:20am</div>
            <div className="col-6 todaysDegrees">Feels like 17℃</div>
          </div>
        </h4>
      </div>
      <form className="Search" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a city" onChange={updateCity} />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </div>
  );
}
