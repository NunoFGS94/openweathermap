import React, { useState } from "react";
import { WeatherType } from "../enums/WeatherTypeEnum";
import WeatherCardDisplay from "./WeatherCardDisplay";
import "../styles/WeatherDisplay.css";
import { useOpenData } from "../services/useOpenWeather";

export default function WeatherDisplay() {
  const [location] = useState("Heidenheim, Germany");

  const { data, loading } = useOpenData(location);

  const convertWeatherCondition = (weaterCondition: string) => {
    switch (weaterCondition) {
      case "Thunderstorm":
        return WeatherType.Stormy;
      case "Drizzle":
      case "Rain":
        return WeatherType.Rainy;
      case "Snow":
        return WeatherType.Snowy;
      case "Clear":
        return WeatherType.Sunny;
      case "Clouds":
        return WeatherType.Cloudy;
      default:
        return WeatherType.Other;
    }
  };

  return (
    <div>
      <h1>
        Weather in <span className="text-accent">{location}</span>
      </h1>
      <div className="weather-content">
        {loading ? <h4>Loading...</h4> : null}
        {data && <WeatherCardDisplay openWeatherResponse={data} />}
      </div>
    </div>
  );
}
