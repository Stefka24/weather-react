import React from "react";
import CurrentDate from "./CurrentDate";
import "./CurrentWeather.css";
import WeatherIcon from "./WeatherIcon";

export default function CurrentWeather(props) {
  let celsius = props.data.currentTemp;
  let feelsLikeCelsius = props.data.feelsLike;

  return (
    <div className="CurrentWeather">
      <h1>
        <div className="row">
          <div className="col-6">{props.data.city}</div>
          <div className="col-6 todaysDegrees">
            {celsius} ℃
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
}
