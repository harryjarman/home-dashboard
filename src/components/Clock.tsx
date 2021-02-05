import React, { useEffect, useState } from "react";

interface IClockProps {
  seconds?: boolean;
}

const Clock: React.FC<IClockProps> = ({ seconds = true }) => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    function pad(num, size) {
      num = num.toString();
      while (num.length < size) num = "0" + num;
      return num;
    }

    const currenTime = () => {
      const hour = pad(new Date().getHours(), 2);
      const minute = pad(new Date().getMinutes(), 2);
      const secs = pad(new Date().getSeconds(), 2);
      if (seconds) {
        setTime(`${hour}:${minute}:${secs}`);
      } else {
        setTime(`${hour}:${minute}`);
      }
    };

    const timer = setInterval(() => {
      currenTime();
    }, 1000);
    currenTime();
    return () => {
      clearInterval(timer);
    };
  }, [seconds]);

  return <>{time}</>;
};
export default Clock;
