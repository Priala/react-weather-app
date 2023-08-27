import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTeperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}`;
  }

  function minTeperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}`;
  }

  function day() {
    let date = new Date(props.data.dt * 10000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon
        code={props.data.weather[0].icon}
        size={36}
      />
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {maxTeperature()}°C
        </span>
        |
        <span className="WeatherForecast-temperature-min">
          {minTeperature()}°C
        </span>
      </div>
    </div>
  );
}
