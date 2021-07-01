import axios from "axios";
import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiKey = "d661e79489a89b41511cef6ae77740b8";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div> Fri </div>
          <WeatherIcon code="01d" size={35} />
          <div> 19℃</div>
        </div>
      </div>
    </div>
  );
}
