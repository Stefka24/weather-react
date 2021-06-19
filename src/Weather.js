import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("Edinburgh");
  const [name, setName] = useState("Edinburgh");
  const [currentTemp, setCurrentTemp] = useState(15);
  const [feelsLike, setFeelsLike] = useState(14);
  const [icon, setIcon] = useState("01d");

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function showWeather(response) {
    setName(response.data.name);
    setCurrentTemp(Math.round(response.data.main.temp));
    setFeelsLike(Math.round(response.data.main.feels_like));
    setIcon(response.data.weather[0].icon);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "2bbfe2c83b5eba58ece5b7c5c691290a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  let weather = (
    <div className="Weather">
      <div className="Temperature">
        <h1>
          <div className="row">
            <div className="col-6">{name}</div>
            <div className="col-6 todaysDegrees">
              {currentTemp} ℃
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt="weather"
                className="weatherIcon"
              />
            </div>
          </div>
        </h1>
        <h4>
          <div className="row">
            <div className="col-6">19th June 10:20am</div>
            <div className="col-6 todaysDegrees">Feels like {feelsLike}℃</div>
          </div>
        </h4>
      </div>
    </div>
  );

  let form = (
    <form className="Weather" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" className="searchButton" />
    </form>
  );
  return (
    <div>
      {weather}
      {form}
    </div>
  );
}
