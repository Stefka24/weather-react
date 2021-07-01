import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function temperature() {
    let temp = Math.round(props.data.temp.max);
    return `${temp}`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="col">
      <div> {day()} </div>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />
      <div> {temperature()}℃</div>
    </div>
  );
}
