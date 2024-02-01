"use client";
import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import LettersChecker from "@/utils/LettersChecker";
import WordChossing from "@/utils/WordChoosing";
import GetWords from "@/utils/GetWords";
import WordsDisplayCard from "./WordsDisplayCard";

const WordsForm = () => {
  const [words, setWords] = useState<string[]>([]);
  const [word, setWord] = useState<string>("");

  const [inputWord, setInputWord] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [invalidLettersIndex, setInvalidLettersIndex] = useState<number[]>([]);
  const [validLettersIndex, setValidLettersIndex] = useState<number[]>([]);

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
      setValidLettersIndex
    );
  }, [inputWord, word]);

  useEffect(() => {
    if (isGameStarted && !word) setIsGameFinished(true);
  }, [words, isGameStarted, word]);

  useEffect(() => {
    if (!word) return;

    setIsValid(invalidLettersIndex.length === 0);

    if (validLettersIndex.length === word.length && inputWord === word) {
      setInputWord("");
      if (!isGameFinished) WordChossing(words, setWord, setWords);
    }
  }, [invalidLettersIndex, validLettersIndex, word, words]);

  return (
    <div className="flex flex-col justify-center items-center mt-24  text-2xl">
      <WordsDisplayCard
        word={word}
        words={words}
        invalidLettersIndex={invalidLettersIndex}
        validLettersIndex={validLettersIndex}
      />
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
