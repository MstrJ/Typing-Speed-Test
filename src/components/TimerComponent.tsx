import React, { useEffect, useState } from "react";
import TimerDisplayCard from "./TimerDisplayCard";

const TimerComponent = (props: {
  isGameStarted: boolean;
  setIsGameFinished: any;
  timer: number;
  setTimer: any;
}) => {
  useEffect(() => {
    if (props.isGameStarted && props.timer === 0) props.setIsGameFinished(true);
    if (props.isGameStarted && props.timer > 0) {
      const interval = setInterval(() => {
        props.setTimer((prev: any) => prev - 1);
      }, 1000);
      return () => {
        clearInterval(interval);
      };
    }
  }, [props.isGameStarted, props.timer]);

  return <TimerDisplayCard timer={props.timer} />;
};

export default TimerComponent;
