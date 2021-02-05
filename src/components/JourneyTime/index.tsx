import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./JourneyTime.module.scss";

const JourneyTime = () => {
  const [journeyTime, setJourneyTime] = useState("Loading...");
  const [stationInfo, setStationInfo] = useState({
    stationFrom: "",
    stationTo: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("/api/tfl_journey");
      setJourneyTime(data.journey_time + "m");
      setStationInfo({
        stationFrom: data.stationFrom,
        stationTo: data.stationTo,
      });
    };
    fetchData();

    const timer = setInterval(() => {
      fetchData();
    }, 5 * 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.large}>{journeyTime}</div>
      <div className={styles.caption}>Estimated time to TCR</div>
      <a
        href={`https://tfl.gov.uk/plan-a-journey/results?FromId=${stationInfo.stationFrom}&ToId=${stationInfo.stationTo}`}
        target="_blank"
      >
        Journey Details
      </a>
    </div>
  );
};
export default JourneyTime;
