import React from "react";
import CurrentDate from "./CurrentDate";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <h1>
        <div className="row">
          <div className="col-6">{props.data.city}</div>
          <div className="col-6 todaysDegrees">
            {props.data.currentTemp} ℃
            <img
              src={`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`}
              alt="weather"
              className="weatherIcon"
            />
          </div>
        </div>
      </h1>
      <h4>
        <div className="row">
          <div className="col-6">
            <CurrentDate date={props.data.date} />
          </div>
          <div className="col-6 todaysDegrees">
            Feels like {props.data.feelsLike}℃
          </div>
        </div>
      </h4>
    </div>
  );
}
