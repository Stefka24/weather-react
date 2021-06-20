import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentDate from "./CurrentDate";

export default function Weather() {
  const [city, setCity] = useState("Edinburgh");
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function showWeather(response) {
    setWeatherData({
      looaded: true,
      name: response.data.name,
      date: new Date(response.data.dt * 1000),
      currentTemp: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
    });
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
            <div className="col-6">{weatherData.name}</div>
            <div className="col-6 todaysDegrees">
              {weatherData.currentTemp} ℃
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
                alt="weather"
                className="weatherIcon"
              />
            </div>
          </div>
        </h1>
        <h4>
          <div className="row">
            <div className="col-6">
              <CurrentDate date={weatherData.date} />
            </div>
            <div className="col-6 todaysDegrees">
              Feels like {weatherData.feelsLike}℃
            </div>
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
  if (weatherData.loaded) {
    return (
      <div>
        {weather}
        {form}
      </div>
    );
  } else {
    return "Loading";
  }
}
