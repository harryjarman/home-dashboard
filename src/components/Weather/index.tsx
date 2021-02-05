import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import styles from "./Weather.module.scss";

// Icons
import {
  RiCloudyLine,
  RiFoggyLine,
  RiHailLine,
  RiMoonClearLine,
  RiRainyLine,
  RiSnowyLine,
  RiSunLine,
  RiThunderstormsLine,
  RiWindyLine,
} from "react-icons/ri";

const conditionIcons = {
  "clear-night": RiMoonClearLine,
  cloudy: RiCloudyLine,
  fog: RiFoggyLine,
  hail: RiHailLine,
  lightning: RiThunderstormsLine,
  "lightning-rainy": RiThunderstormsLine,
  partlycloudy: RiCloudyLine,
  pouring: RiRainyLine,
  rainy: RiRainyLine,
  snowy: RiSnowyLine,
  "snowy-rainy": RiSnowyLine,
  sunny: RiSunLine,
  windy: RiRainyLine,
  "windy-variant": RiWindyLine,
  exceptional: "",
};

interface IWeather {
  size?: number;
}

const Weather: React.FC<IWeather> = ({ size = 32 }) => {
  const [weather, setWeather] = useState<any>({
    weather: {},
    temperature_unit: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/weather");
      setWeather(data);
    };
    fetchData();
  }, []);

  const icon = useMemo(() => {
    const ConditionIcon = conditionIcons[weather.weather.state];
    if (ConditionIcon)
      return (
        <ConditionIcon
          style={{ width: size, height: size }}
          title={weather.weather.state}
        />
      );
    return null;
  }, [weather, size]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.temperature}>
        {weather.weather.attributes?.temperature}
        {weather.temperature_unit}
      </div>
    </div>
  );
};

export default Weather;
