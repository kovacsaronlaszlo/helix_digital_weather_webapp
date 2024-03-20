import { useEffect, useState } from "react";
import "./App.css";
import { usePosition } from "./hook/usePosition";
import { fetchCurrentCity, fetchOtherCity } from "./helper/helperFunction";
import { WeatherType } from "./types/types";
import { Loader, WeatherCard } from "./components";

function App() {
  const { lat, lon } = usePosition();
  const [weatherData, setWeatherData] = useState<WeatherType | null>(null);
  const [londonData, setLondonData] = useState<WeatherType | null>(null);
  const [date, setDate] = useState<Date>(new Date())
  let interval: string | number | NodeJS.Timeout | undefined

  useEffect(() => {
    fetchCurrentCity(lat, lon).then((data) => setWeatherData(data));
    fetchOtherCity().then((data) => setLondonData(data));
  }, [lat, lon]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    interval = setInterval(() => {
      tick();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [])

  const tick = () => {
    setDate(new Date());
  };

  return !weatherData || !londonData ? (
    <Loader />
  ) : (
    <div className="flex gap-5 flex-col md:flex-row">
      {}
      <WeatherCard
        name={weatherData.name}
        weather={weatherData.weather![0]}
        main={weatherData.main}
        time={date.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit',   hour12: true, timeZone: 'Europe/Budapest' })}
        wind={weatherData.wind}
      />
      <WeatherCard
        name={londonData.name}
        weather={londonData.weather![0]}
        main={londonData.main}
        time={date.toLocaleString('en-GB', {hour: '2-digit', minute: '2-digit',   hour12: true, timeZone: 'Europe/London' })}
        wind={londonData.wind}
      />
    </div>
  );
}

export default App;
