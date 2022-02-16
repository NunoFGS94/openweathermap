import { renderHook } from "@testing-library/react-hooks";
import { NormalizedOpenWeatherSingleResp } from "./OpenWeatherSingleResponse";
import { useOpenData } from "./useOpenWeather";

const stubbedCountries = [
  { name: "Slovakia", capital: "Bratislava" },
  { name: "Germany", capital: "Berlin" },
];
const stubbedFetchUrl = "api/countriesUrl-mocked";

// afterEach(() => {
//   global.fetch.mockClear();
// });

// afterAll(() => {
//   global.fetch.mockRestore();
// });

const mockData = {
  weather: [
    {
      id: 123,
      main: "string",
      description: "string",
    },
  ],
  main: {
    temp: 123,
    feels_like: 123,
    temp_min: 123,
    temp_max: 123,
    pressure: 123,
    humidity: 123,
  },
  wind: {
    speed: 123,
  },
  visibility: 123,
};

it("should return data after fetch", async () => {
  //@ts-ignore
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
    })
  );

  // Execute
  const { result, waitForNextUpdate } = renderHook(() => useOpenData(""));
  await waitForNextUpdate();

  // Assert
  expect(result.current.data).toStrictEqual(
    new NormalizedOpenWeatherSingleResp(mockData)
  );
  expect(result.current.error).toBe(undefined);
});

it("should return error after fetch", async () => {
  //@ts-ignore
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.reject("error"),
    })
  );

  // Execute
  const { result, waitForNextUpdate } = renderHook(() => useOpenData(""));
  await waitForNextUpdate();

  // Assert
  expect(result.current.error).toStrictEqual("error");
  expect(result.current.data).toStrictEqual(undefined);
});
