import { render, screen } from "@testing-library/react";
import WeatherDisplay from "./WeatherDisplay";
import { useOpenData } from "../services/useOpenWeather";
import { WeatherType } from "../enums/WeatherTypeEnum";

const mockData = {
  minTemperature: 123,
  maxTemperature: 123,
  windSpeed: 123,
  humidity: 123,
  visibility: 123,
  weatherType: WeatherType.Sunny,
};

jest.mock("../services/useOpenWeather");

test("should", () => {
  //@ts-ignore
  useOpenData.mockReturnValue({ loading: false, data: mockData });

  render(<WeatherDisplay />);
  expect(screen.getByTestId("title").textContent).toContain("Weather in");
  expect(screen.getByText(`Min Temp`)).toBeInTheDocument();
});
