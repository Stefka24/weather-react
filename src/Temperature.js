import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let weatherData = {
    city: "Edinburgh",
    degrees: "18",
    date: "9th June",
    time: "10:20am",
    feelsLike: "17",
  };
  return (
    <div className="Temperature">
      <h1>
        <div className="row">
          <div className="col-6">{weatherData.city}</div>
          <div className="col-6 todaysDegrees">
            {weatherData.degrees} ℃
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
          <div className="col-6">
            {weatherData.date} {weatherData.time}
          </div>
          <div className="col-6 todaysDegrees">
            Feels like {weatherData.feelsLike}℃
          </div>
        </div>
      </h4>
    </div>
  );
}
