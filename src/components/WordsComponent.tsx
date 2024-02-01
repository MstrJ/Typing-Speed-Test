"use client";
import React, { useEffect, useState } from "react";
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
  const [isGameFinished, setIsGameFinished] = useState<boolean>(false);

  // On web load fetching words from the API
  useEffect(() => {
    const fetchWords = async () => {
      const newWords = await GetWords();
      setWords(newWords);
      WordChossing(newWords, setWord, setWords);
    };
    fetchWords();
  }, []);

  // On word change updating a word validity
  useEffect(() => {
    if (!word) return;
    if (!isGameStarted) setIsGameStarted(true);
    LettersChecker(
      inputWord,
      word,
      setInvalidLettersIndex,
      setValidLettersIndex
    );
  }, [inputWord]);

  useEffect(() => {
    if (!word) return;
    LettersChecker(
      inputWord,
      word,
      setInvalidLettersIndex,
      setValidLettersIndex
    );
  }, [word]);

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
        isValid={isValid}
        inputWord={inputWord}
        disabled={isGameFinished}
        setInputWord={setInputWord}
      />
    </div>
  );
};

export default WordsComponent;
