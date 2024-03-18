import { WeatherCardType } from '../../types/types';

export default function WeatherCard(props: WeatherCardType) {
    const {
        name,
        weather,
        main,
        wind
    } = props;
  return (
    <section className='w-[20rem] p-6 flex flex-col items-center gap-2 rounded-lg border-2 border-blue-light shadow-lg shadow-blue-medium hover:shadow-blue-lighter'>
        <label>{name}</label>
        <img
          src={`https://openweathermap.org/img/wn/${
            weather.icon
          }.png`}
          alt={weather.description}
        />
        <p>{main.temp} °C</p>
        <p>{main.pressure} %</p>
        <p>{wind.speed} km/h</p>
      </section>
  )
}
