import React from "react";
import { WeatherType } from "../enums/WeatherTypeEnum";
import "./WeatherCardDisplay.css";
import { ReactComponent as SunnyIcon } from "../components/icons/sunnyIcon.svg";
import { ReactComponent as CloudyIcon } from "../components/icons/cloudyIcon.svg";
import { ReactComponent as SnowyIcon } from "../components/icons/snowyIcon.svg";
import { ReactComponent as StormyIcon } from "../components/icons/stormyIcon.svg";
import { ReactComponent as RainyIcon } from "../components/icons/rainyIcon.svg";
import { ReactComponent as UnknownIcon } from "../components/icons/unknownIcon.svg";
import { ReactComponent as HumidityIcon } from "../components/icons/humidityIcon.svg";
import { ReactComponent as VisibilityIcon } from "../components/icons/visibilityIcon.svg";
import { ReactComponent as WindIcon } from "../components/icons/windIcon.svg";
import { NormalizedOpenWeatherSingleResp } from "../services/OpenWeatherSingleResponse";

type WeatherCardDisplayProps = {
  openWeatherResponse: NormalizedOpenWeatherSingleResp;
};

export default function WeatherCardDisplay({
  openWeatherResponse,
}: WeatherCardDisplayProps) {
  const {
    weatherType,
    minTemperature,
    maxTemperature,
    windSpeed,
    humidity,
    visibility,
  } = openWeatherResponse;
  const getWeatherIcon = (weatherType: WeatherType) => {
    switch (weatherType) {
      case WeatherType.Sunny:
        return <SunnyIcon />;
      case WeatherType.Cloudy:
        return <CloudyIcon />;
      case WeatherType.Rainy:
        return <RainyIcon />;
      case WeatherType.Snowy:
        return <SnowyIcon />;
      case WeatherType.Stormy:
        return <StormyIcon />;
      default:
        return <UnknownIcon />;
    }
  };

  return (
    <div className="card">
      <div className="weather-icon">{getWeatherIcon(weatherType)}</div>
      <div className="weather-info-container">
        <div className="weather-info-item min">
          Min Temp
          <p data-testid="minTemperature">{minTemperature}ºC</p>
        </div>
        <div className="weather-info-item max">
          Max Temp
          <p data-testid="maxTemperature">{maxTemperature}ºC</p>
        </div>
      </div>
      <div className="weather-other-info-container">
        <div data-testid="humidity" className="weather-other-info-item">
          <WindIcon />
          <span>{windSpeed}m/s</span>
        </div>
        <div data-testid="humidity" className="weather-other-info-item">
          <HumidityIcon />
          <span>{humidity}%</span>
        </div>
        <div data-testid="humidity" className="weather-other-info-item">
          <VisibilityIcon />
          <span>{visibility}m</span>
        </div>
      </div>
    </div>
  );
}
