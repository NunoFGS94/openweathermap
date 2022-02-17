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
        const resp = await fetch(openWeatherBaseApi.getUrl(location));
        const data = await resp.json();
        if (data)
          setData(
            new NormalizedOpenWeatherSingleResp(data as OpenWeatherSingleResp)
          );
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, [location]);

  return { data, error, loading };
};
