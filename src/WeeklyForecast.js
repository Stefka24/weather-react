import axios from "axios";
import React, { useState } from "react";
import DailyForecast from "./DailyForecast";

export default function WeeklyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return <DailyForecast data={forecast[0]} />;
  } else {
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiKey = "d661e79489a89b41511cef6ae77740b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
