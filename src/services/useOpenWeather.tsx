import { useEffect, useState } from "react";
import {
  NormalizedOpenWeatherSingleResp,
  OpenWeatherSingleResp,
} from "./OpenWeatherSingleResponse";

const openWeatherBaseApi = {
  getUrl: (location: string) =>
    `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}&units=metric`,
};

export const useOpenData = (location: string) => {
  const [data, setData] = useState<NormalizedOpenWeatherSingleResp>();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(openWeatherBaseApi.getUrl(location));
        const resp = await fetch(openWeatherBaseApi.getUrl(location));
        console.log(resp);
        const data = await resp.json();
        console.log("data", data);
        if (data)
          setData(
            new NormalizedOpenWeatherSingleResp(data as OpenWeatherSingleResp)
          );
      } catch (error: any) {
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [location]);

  return { data, error, loading };
};
