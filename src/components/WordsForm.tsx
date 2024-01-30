"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import LettersChecker from "../../utils/LettersChecker";

const WordsForm = () => {
  const [words, setWords] = useState<string[]>([]);
  const word = "piesek";

  const [inputWord, setInputWord] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [invalidLetterIndex, setInvalidLetterIndex] = useState<number[]>([]);
  const [validLetterIndex, setValidLetterIndex] = useState<number[]>([]);

  useEffect(() => {
    LettersChecker(inputWord, word, setInvalidLetterIndex, setValidLetterIndex);
  }, [inputWord, word]);

  useEffect(() => {
    if (invalidLetterIndex.length === 0) setIsValid(true);
    else setIsValid(false);
  }, [invalidLetterIndex, validLetterIndex, word]);

  const wordArray = word.split("");
  return (
    <div className="flex flex-col justify-center items-center mt-24  text-xl">
      <div className="my-8 flex flex-row">
        {wordArray.map((letter, i) => {
          return (
            <div
              key={i}
              className={`${
                invalidLetterIndex.includes(i)
                  ? "text-red-500"
                  : validLetterIndex.includes(i)
                  ? "text-green-500"
                  : "text-white"
              } `}
            >
              {letter}
            </div>
          );
        })}
      </div>
      <Input
        className={"mt-3 ml-2"}
        isValid={isValid}
        inputWord={inputWord}
        setInputWord={setInputWord}
      />
    </div>
  );
};

export default WordsForm;
