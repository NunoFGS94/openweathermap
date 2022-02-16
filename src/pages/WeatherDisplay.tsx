import React, { useState } from "react";
import WeatherCardDisplay from "./WeatherCardDisplay";
import "../styles/WeatherDisplay.css";
import { useOpenData } from "../services/useOpenWeather";

export default function WeatherDisplay() {
  const [location] = useState("Heidenheim, Germany");

  const { data, loading } = useOpenData(location);

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
