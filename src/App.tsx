import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState({});

  const APY_KEY = process.env.VITE_API_KEY

  useEffect(() => {
    if(APY_KEY !== undefined) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${APY_KEY}`
      )
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch((error) => console.error("Error fetching data: ", error));
    }
    
  }, [APY_KEY]);

  console.log(weatherData)

  return (
    <>
      <div className="bg-blue-dark">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </>
  );
}

export default App;
