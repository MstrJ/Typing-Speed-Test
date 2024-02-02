"use client";
import React, { use, useEffect, useState } from "react";
import Input from "./Input";
import LettersChecker from "@/utils/LettersChecker";
import WordChossing from "@/utils/WordChoosing";
import GetWords from "@/utils/GetWords";
import WordsDisplayCard from "./WordsDisplayCard";
import StatsComponent from "./StatsComponent";

const WordsComponent = () => {
  const [words, setWords] = useState<string[]>([]);
  const [word, setWord] = useState<string>("");

  const [inputWord, setInputWord] = useState<string>("");
  const [passedWords, setPassedWords] = useState<string[]>([]);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [invalidLettersIndex, setInvalidLettersIndex] = useState<number[]>([]);
  const [validLettersIndex, setValidLettersIndex] = useState<number[]>([]);

  const [isGameStarted, setIsGameStarted] = useState<boolean>(false);
  const [timer, setTimer] = useState<number>(60);
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

  // On web load fetching words from the API
  const fetchWords = async () => {
    const newWords = await GetWords();
    WordChossing(newWords, setWord, setWords);
  };

  const resetGame = () => {
    setTimer(60);
    setPassedWords([]);
    setWord("");
    setInputWord("");
    setIsValid(true);
    setInvalidLettersIndex([]);
    setValidLettersIndex([]);
    setIsGameFinished(false);
    setIsGameStarted(false);
    fetchWords();
  };

  useEffect(() => {
    resetGame();
  }, []);

  // On word change updating a word validity
  useEffect(() => {
    if (!word) return;
    if (isGameFinished) return;
    if (!isGameStarted) setIsGameStarted(true);

    if (isGameStarted)
      LettersChecker(
        inputWord,
        word,
        setInvalidLettersIndex,
        setValidLettersIndex
      );
  }, [inputWord]);

  // On game finish reseting the game
  useEffect(() => {
    if (isGameFinished && isGameStarted && words) {
      resetGame();
    }
  }, [isGameFinished]);

  // On word change checking if the word is valid
  useEffect(() => {
    if (!word) return;

    setIsValid(invalidLettersIndex.length === 0);

    if (validLettersIndex.length === word.length && inputWord === word) {
      setInputWord("");
      if (!isGameFinished) {
        setPassedWords([...passedWords, word]);
        WordChossing(words, setWord, setWords);
      }
    }
  }, [invalidLettersIndex, validLettersIndex, word, words]);

  return (
    <div className="flex flex-col justify-center items-center mt-10  text-2xl">
      <StatsComponent
        isGameStarted={isGameStarted}
        setIsGameFinished={setIsGameFinished}
        passedWords={passedWords}
        setTimer={setTimer}
        timer={timer}
      />
      <WordsDisplayCard
        word={word}
        words={words}
        invalidLettersIndex={invalidLettersIndex}
        validLettersIndex={validLettersIndex}
      />
      <Input
        className={
          "w-[25%] text-center border-2 border-ddark/70 animate-pulse focus:animate-none"
        }
        isGameStarted={isGameStarted}
        isValid={isValid}
        inputWord={inputWord}
        disabled={isGameFinished}
        setInputWord={setInputWord}
      />
    </div>
  );
};

export default React.memo(WordsComponent);
