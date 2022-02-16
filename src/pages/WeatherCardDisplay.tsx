import React from "react";
import { WeatherType } from "../enums/WeatherTypeEnum";
import "../styles/WeatherCardDisplay.css";
import { ReactComponent as SunnyIcon } from "../components/icons/sunnyIcon.svg";
import { ReactComponent as CloudyIcon } from "../components/icons/cloudyIcon.svg";
import { ReactComponent as SnowyIcon } from "../components/icons/snowyIcon.svg";
import { ReactComponent as StormyIcon } from "../components/icons/stormyIcon.svg";
import { ReactComponent as RainyIcon } from "../components/icons/rainyIcon.svg";
import { ReactComponent as UnknownIcon } from "../components/icons/unknownIcon.svg";

type WeatherCardDisplayProps = {
  minTemperature: number;
  maxTemperature: number;
  weatherType: WeatherType;
};

export default function WeatherCardDisplay({
  minTemperature,
  maxTemperature,
  weatherType,
}: WeatherCardDisplayProps) {
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
    </div>
  );
}
