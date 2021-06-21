import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import CurrentWeather from "./CurrentWeather";

export default function Weather(props) {
  const [city, setCity] = useState(props.city);
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function showWeather(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      currentTemp: Math.round(response.data.main.temp),
      feelsLike: Math.round(response.data.main.feels_like),
      icon: response.data.weather[0].icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "d661e79489a89b41511cef6ae77740b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  let form = (
    <form className="Weather" onSubmit={handleSubmit}>
      <input type="text" placeholder="Enter a city" onChange={updateCity} />
      <input type="submit" value="Search" className="searchButton" />
    </form>
  );
  if (weatherData.loaded) {
    return (
      <div>
        <CurrentWeather data={weatherData} />
        {form}
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
