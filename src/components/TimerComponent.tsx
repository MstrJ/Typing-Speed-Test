import React, { useEffect, useState } from "react";
import TimerDisplayCard from "./TimerDisplayCard";

const TimerComponent = (props: {
  isGameStarted: boolean;
  setIsGameFinished: any;
}) => {
  const [timer, setTimer] = useState<number>(60);

  useEffect(() => {
    if (props.isGameStarted) {
      setTimer(60);
    }
  }, [props.isGameStarted]);

  useEffect(() => {
    if (props.isGameStarted && timer === 0) props.setIsGameFinished(true);

    console.log(props.isGameStarted, props.isGameStarted && timer > 0);
    if (props.isGameStarted && timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [props.isGameStarted, timer]);

  return <TimerDisplayCard timer={timer} />;
};

export default TimerComponent;
