import React from 'react'
import { WeatherCardType } from '../../types/types';

export default function WeatherCard(props: WeatherCardType) {
    const {
        name,
        weather,
        main,
        wind
    } = props;
  return (
    <section>
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
