import "./App.css";
import axios from "axios";

function App(props) {
  function showTemperature(response) {
    alert(
      `The temperature in ${response.data.name} is ${response.data.main.temp}`
    );
  }
  let apiKey = "2bbfe2c83b5eba58ece5b7c5c691290a";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello</h1>
      </header>
    </div>
  );
}

export default App;
