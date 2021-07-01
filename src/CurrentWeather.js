import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  const [unit, setUnit] = useState("metric");

  let celsius = props.data.currentTemp;
  let feelsLikeCelsius = props.data.feelsLike;
  let fahrenheit = Math.round((celsius * 9) / 5 + 32);
  let feelsLikeFarenheit = Math.round((feelsLikeCelsius * 9) / 5 + 32);

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("imperial");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("metric");
  }
  if (unit === "metric") {
    return (
      <div className="CurrentWeather">
        <h1>
          <div className="row">
            <div className="col-6">{props.data.city}</div>
            <div className="col-6 todaysDegrees">
              {celsius} ℃ |
              <a href=" " onClick={showFahrenheit}>
                ℉
              </a>
              <WeatherIcon code={props.data.icon} />
            </div>
          </div>
        </h1>
        <h4>
          <div className="row">
            <div className="col-6">
              <CurrentDate date={props.data.date} />
            </div>
            <div className="col-6 todaysDegrees">
              Feels like {feelsLikeCelsius}℃
            </div>
          </div>
        </h4>
      </div>
    );
  } else {
    return (
      <div className="CurrentWeather">
        <h1>
          <div className="row">
            <div className="col-6">{props.data.city}</div>
            <div className="col-6 todaysDegrees">
              {" "}
              {fahrenheit}{" "}
              <a href=" " onClick={showCelsius}>
                ℃{" "}
              </a>
              | ℉
              <WeatherIcon code={props.data.icon} size={56} />
            </div>
          </div>
        </h1>
        <h4>
          <div className="row">
            <div className="col-6">
              <CurrentDate date={props.data.date} />
            </div>
            <div className="col-6 todaysDegrees">
              Feels like {feelsLikeFarenheit}℉
            </div>
          </div>
        </h4>
      </div>
    );
  }
}
