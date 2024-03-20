import { WeatherCardType } from "../../types/types";

export default function WeatherCard(props: WeatherCardType) {
  const { name, weather, main, wind, time } = props;
  return (
    <section className="w-[20rem] p-6 flex flex-col items-center gap-2 rounded-3xl shadow-lg shadow-blue-medium hover:shadow-blue-lighter bg-gradient-to-b from-blue-dark to-blue-lighter">
      <div className="flex flex-col w-full bg-gradient-to-tr from-blue-medium to-blue-darker p-3 rounded-3xl">
        <div className="flex justify-between w-full">
          <label>{name}</label>
          <label>{time}</label>
        </div>
        <div className="flex justify-between items-center">
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}.png`}
            alt={weather.description}
            className="w-32 h-32"
          />
          <p className="flex flex-col">
            <span className="text-3xl font-bold">{main.temp} °C</span>
            <span>{weather.main}</span>
            
          </p>
        </div>
      </div>
      <div className="flex flex-col justify-start w-full bg-gradient-to-tr from-blue-medium to-blue-darker p-3 rounded-3xl">
        <p className="flex gap-3">
          <span>Humidity</span>
          <span>{main.humidity} %</span>
        </p>
        <p className="flex gap-3">
          <span>Wind speed</span>
          <span>{wind.speed} km/h</span>
        </p>
      </div>
    </section>
  );
}
