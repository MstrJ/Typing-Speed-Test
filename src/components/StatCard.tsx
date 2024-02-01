import React from "react";

const StatCard = (props: { number: number; name: string }) => {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex text-5xl font-bold rounded-3xl pt-2 bg-dgrey justify-center items-center border-0 w-28 h-28">
        {props.number}
      </div>
      <div className="text-center text-base font-thin">{props.name}</div>
    </div>
  );
};

export default StatCard;
