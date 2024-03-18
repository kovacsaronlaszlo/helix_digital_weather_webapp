import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { usePosition } from "./hook/usePosition";
import { fetchCurrentCity } from "./helper/helperFunction";

function App() {
  const { latitude, longitude } = usePosition();
  const [weatherData, setWeatherData] = useState({});

  useEffect(() => {
    fetchCurrentCity(latitude, longitude).then(data => setWeatherData(data))
    
  }, [latitude, longitude]);

  console.log(weatherData);

  return !weatherData ? (
    <img src={reactLogo} className="logo react" alt="React logo" />
  ) : (
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
