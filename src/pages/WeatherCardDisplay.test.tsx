import { render, screen } from "@testing-library/react";
import { WeatherType } from "../enums/WeatherTypeEnum";
import WeatherCardDisplay from "./WeatherCardDisplay";

test("should display min and max temperatures", () => {
  const minTemp = 10;
  const maxTemp = 20;
  render(
    <WeatherCardDisplay
      minTemperature={minTemp}
      maxTemperature={maxTemp}
      weatherType={WeatherType.Sunny}
    />
  );
  screen.debug();
  const minTempElement = screen.getByTestId("minTemperature");
  const maxTempElement = screen.getByTestId("maxTemperature");
  expect(minTempElement).toHaveTextContent(`${minTemp}ºC`);
  expect(maxTempElement).toHaveTextContent(`${maxTemp}ºC`);
});
