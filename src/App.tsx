import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { usePosition } from "./hook/usePosition";
import { fetchCurrentCity, fetchOtherCity } from "./helper/helperFunction";
import { Weather } from "./types/types";
import { Loader } from "./components";

function App() {
  const { latitude, longitude } = usePosition();
  const [weatherData, setWeatherData] = useState<Weather | null>(null);
  const [otherData, setOtherData] = useState<Weather | null>(null);

  useEffect(() => {
    fetchCurrentCity(latitude, longitude).then((data) => setWeatherData(data));
    fetchOtherCity().then((data) => setOtherData(data));
  }, [latitude, longitude]);

  return !weatherData || !otherData ? (
    <Loader />
  ) : (
    <div className="flex gap-5">
      <section>
        <label>{weatherData.name}</label>
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].description}
        />
      </section>
      <section>
        <label>{otherData.name}</label>
        <img
          src={`https://openweathermap.org/img/wn/${otherData.weather[0].icon}.png`}
          alt={otherData.weather[0].description}
        />
      </section>
    </div>
  );
}

export default App;
