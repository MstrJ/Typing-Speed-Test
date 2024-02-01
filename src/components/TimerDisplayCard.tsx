import React from "react";

const TimerDisplayCard = (prop: { timer: number }) => {
  return (
    <div
      className={`flex flex-col font-bold rounded-3xl ${
        prop.timer % 2 == 0 ? " border-dred" : "border-dcyan"
      }  border-4 w-28 h-28 justify-center items-center text-center duration-500 `}
    >
      <div className="text-5xl mt-2">
        {prop.timer < 10 ? `0${prop.timer}` : prop.timer}
      </div>
      <div className="font-light text-sm">seconds</div>
    </div>
  );
};

export default TimerDisplayCard;
