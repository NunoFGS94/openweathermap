import { WeatherType } from "../enums/WeatherTypeEnum";

export type OpenWeatherSingleResp = {
  weather: {
    id: number;
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  wind: {
    speed: number;
  };
  visibility: number;
};

export class NormalizedOpenWeatherSingleResp {
  minTemperature: number;
  maxTemperature: number;
  windSpeed: number;
  humidity: number;
  visibility: number;
  weatherType: WeatherType;

  constructor(openWeatherResp: OpenWeatherSingleResp) {
    this.minTemperature = openWeatherResp.main.temp_min;
    this.maxTemperature = openWeatherResp.main.temp_max;
    this.windSpeed = openWeatherResp.wind.speed;
    this.humidity = openWeatherResp.main.humidity;
    this.visibility = openWeatherResp.visibility;
    this.weatherType = convertWeatherCondition(
      openWeatherResp.weather[0].main || ""
    );
  }
}

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
