import React from "react";

const WordsDisplayCard = (props: {
  word: string;
  words: string[];
  invalidLettersIndex: number[];
  validLettersIndex: number[];
}) => {
  return (
    <div className="my-8 flex flex-row ml-12">
      {props.word &&
        props.words &&
        props.word.split("").map((letter, i) => {
          return (
            <div
              key={i}
              className={`${
                props.invalidLettersIndex.includes(i)
                  ? "text-red-500"
                  : props.validLettersIndex.includes(i)
                  ? "text-green-500"
                  : "text-white"
              } `}
            >
              {letter}
            </div>
          );
        })}
      <div className="flex flex-row gap-2 ml-2">
        {Array.from({ length: 3 }, (_, i) => (
          <div key={i}>{props.words[i]}</div>
        ))}
      </div>
    </div>
  );
};

export default WordsDisplayCard;
