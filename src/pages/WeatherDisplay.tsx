import React, { useState } from "react";
import WeatherCardDisplay from "./WeatherCardDisplay";
import "./WeatherDisplay.css";
import { useOpenData } from "../services/useOpenWeather";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function WeatherDisplay() {
  const [location] = useState("Heidenheim, Germany");

  const { data, error, loading } = useOpenData(location);

  return (
    <div>
      <h1 data-testid="title">
        Weather in <span className="text-accent">{`${location}`}</span>
      </h1>
      <div className="weather-content">
        {loading ? <Loading /> : null}
        {error && <Error />}
        {data && <WeatherCardDisplay openWeatherResponse={data} />}
      </div>
    </div>
  );
}
