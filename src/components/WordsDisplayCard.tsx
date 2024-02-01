import React from "react";

const WordsDisplayCard = (props: {
  word: string;
  words: string[];
  invalidLettersIndex: number[];
  validLettersIndex: number[];
}) => {
  return (
    <div
      className={`bg-dgrey/15 mt-8 pl-[324px]
      } select-none   my-8 flex flex-row truncate text-3xl border-2 rounded-lg py-1.5  border-ddark/60 w-[45%]`}
    >
      <div className="flex flex-row justify-end  ">
        {props.word &&
          props.words &&
          props.word.split("").map((letter, i) => {
            return (
              <div
                key={i}
                className={` ${
                  props.invalidLettersIndex.includes(i)
                    ? "text-red-500"
                    : props.validLettersIndex.includes(i)
                    ? "text-dcyan"
                    : "text-white"
                } `}
              >
                {letter}
              </div>
            );
          })}
      </div>
      <div className="flex flex-row gap-2 ml-2 ">
        {Array.from({ length: 4 }, (_, i) => (
          <div key={i}>{props.words[i]}</div>
        ))}
      </div>
    </div>
  );
};

export default WordsDisplayCard;
