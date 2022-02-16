import React from "react";
import { WeatherType } from "../enums/WeatherTypeEnum";
import WeatherCardDisplay from "./WeatherCardDisplay";

export default function WeatherDisplay() {
  return (
    <div>
      <WeatherCardDisplay
        weatherType={WeatherType.Rainy}
        minTemperature={10}
        maxTemperature={22}
      />
    </div>
  );
}
