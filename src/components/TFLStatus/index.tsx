import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  FaExclamationTriangle,
  FaInfoCircle,
  FaThumbsUp,
} from "react-icons/fa";
import { IoMdCloseCircle } from "react-icons/io";

import styles from "./TFLStatus.module.scss";

type TStatus =
  | "Good Service"
  | "Minor Delays"
  | "Reduced Service"
  | "Planned Closure";

const StatusIcon = (status: TStatus) => {
  switch (status) {
    case "Good Service":
      return FaThumbsUp;
    case "Minor Delays":
      return FaExclamationTriangle;
    case "Planned Closure":
      return IoMdCloseCircle;
    case "Reduced Service":
      return FaInfoCircle;
  }
};

const TFLStatus = () => {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios("/api/underground");
      setLines(data);
    };
    fetchData();

    const refresher = setInterval(() => {
      fetchData();
    }, 5 * 60 * 1000);

    return () => {
      clearInterval(refresher);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <ul>
        {lines.map((line) => {
          const Icon = StatusIcon(line.state);
          return (
            <li
              key={line.entity_id}
              className={styles[line.entity_id.replace("sensor.", "")]}
            >
              {Icon && (
                <div className={styles.icon}>
                  <Icon />
                </div>
              )}
              <div className={styles["line-name"]}>
                {line.attributes?.friendly_name.replace("London", "")}
              </div>
              <div className={styles.status}>{line.state}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TFLStatus;
