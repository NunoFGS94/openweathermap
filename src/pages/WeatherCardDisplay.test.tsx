import { render, screen } from "@testing-library/react";
import { WeatherType } from "../enums/WeatherTypeEnum";
import { NormalizedOpenWeatherSingleResp } from "../services/OpenWeatherSingleResponse";
import WeatherCardDisplay from "./WeatherCardDisplay";

test("should display min and max temperatures", () => {
  const minTemp = 10;
  const maxTemp = 20;
  const windSpeed = 5;
  const humidity = 50;
  const visibility = 100;
  const weatherType = WeatherType.Sunny;
  render(
    <WeatherCardDisplay
      openWeatherResponse={{
        minTemperature: minTemp,
        maxTemperature: maxTemp,
        windSpeed,
        humidity,
        visibility,
        weatherType,
      }}
    />
  );

  const minTempElement = screen.getByTestId("minTemperature");
  const maxTempElement = screen.getByTestId("maxTemperature");
  expect(minTempElement).toHaveTextContent(`${minTemp}ºC`);
  expect(maxTempElement).toHaveTextContent(`${maxTemp}ºC`);
});
