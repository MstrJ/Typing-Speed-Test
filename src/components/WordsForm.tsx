"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";
import LettersChecker from "@/utils/LettersChecker";
import WordChossing from "@/utils/WordChoosing";
import GetWords from "@/utils/GetWords";

const WordsForm = () => {
  const [words, setWords] = useState<string[]>([]);
  const [word, setWord] = useState<string>("");

  const [inputWord, setInputWord] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [invalidLettersIndex, setInvalidLettersIndex] = useState<number[]>([]);
  const [validLetterIndex, setValidLetterIndex] = useState<number[]>([]);

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

  useEffect(() => {
    const fetchWords = async () => {
      const newWords = await GetWords();
      setWords(newWords);
      WordChossing(newWords, setWord, setWords);
    };

    fetchWords();
  }, []);

  useEffect(() => {
    if (!word) return;
    if (!isGameStarted) setIsGameStarted(true);
    LettersChecker(
      inputWord,
      word,
      setInvalidLettersIndex,
      setValidLetterIndex
    );
  }, [inputWord, word]);

  useEffect(() => {
    if (isGameStarted && !word) setIsGameFinished(true);
  }, [words, isGameStarted, word]);

  useEffect(() => {
    if (!word) return;

    setIsValid(invalidLettersIndex.length === 0);

    if (validLetterIndex.length === word.length && inputWord === word) {
      setInputWord("");
      WordChossing(words, setWord, setWords);
    }
  }, [invalidLettersIndex, validLetterIndex, word, words]);

  return (
    <div className="flex flex-col justify-center items-center mt-24  text-2xl">
      <div className="my-8 flex flex-row ml-12">
        {word &&
          words &&
          word.split("").map((letter, i) => {
            return (
              <div
                key={i}
                className={`${
                  invalidLettersIndex.includes(i)
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
        <div className="flex flex-row gap-2 ml-2">
          {Array.from({ length: 3 }, (_, i) => (
            <div>{words[i]}</div>
          ))}
        </div>
      </div>
      <Input
        className={"mt-3 ml-2"}
        isValid={isValid}
        inputWord={inputWord}
        disabled={isGameFinished}
        setInputWord={setInputWord}
      />
    </div>
  );
};

export default WordsForm;
