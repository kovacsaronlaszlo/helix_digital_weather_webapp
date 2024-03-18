import { useEffect, useState } from "react";
import "./App.css";
import { usePosition } from "./hook/usePosition";
import { fetchCurrentCity, fetchOtherCity } from "./helper/helperFunction";
import { WeatherType } from "./types/types";
import { Loader, WeatherCard } from "./components";

function App() {
  const { lat, lon } = usePosition();
  const [weatherData, setWeatherData] = useState<WeatherType | null>(null);
  const [otherData, setOtherData] = useState<WeatherType | null>(null);

  useEffect(() => {
    fetchCurrentCity(lat, lon).then((data) => setWeatherData(data));
    fetchOtherCity().then((data) => setOtherData(data));
  }, [lat, lon]);

  console.log(weatherData)

  return !weatherData || !otherData ? (
    <Loader />
  ) : (
    <div className="flex gap-5 flex-col md:flex-row">
      <WeatherCard
        name={weatherData.name}
        weather={weatherData.weather![0]}
        main={weatherData.main}
        wind={weatherData.wind}
      />
      <WeatherCard
        name={otherData.name}
        weather={otherData.weather![0]}
        main={otherData.main}
        wind={otherData.wind}
      />
    </div>
  );
}

export default App;
