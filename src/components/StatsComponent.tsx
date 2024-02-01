import React, { useEffect, useState } from "react";
import TimerComponent from "./TimerComponent";
import StatCard from "./StatCard";

const StatsComponent = (props: {
  isGameStarted: boolean;
  setIsGameFinished: any;
  passedWords: string[];
}) => {
  const [wordCount, setWordCount] = useState(0);
  const [charsCount, setCharsCount] = useState(0);
  useEffect(() => {
    setWordCount(props.passedWords.length);
    setCharsCount(props.passedWords.reduce((a, b) => a + b.length, 0));
  }, [props.passedWords]);

  return (
    <div className="flex flex-row gap-16">
      <TimerComponent
        isGameStarted={props.isGameStarted}
        setIsGameFinished={props.setIsGameFinished}
      />
      <div className="flex flex-row gap-5">
        <StatCard name="WPM" number={wordCount} />
        <StatCard name="CPM" number={charsCount} />
        {/* <StatCard name="% accuracy" number={0} /> */}
      </div>
    </div>
  );
};

export default StatsComponent;
