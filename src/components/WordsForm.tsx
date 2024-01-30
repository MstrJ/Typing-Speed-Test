"use client";
import React, { useEffect, useState } from "react";
import Input from "./Input";

const WordsForm = () => {
  const [words, setWords] = useState<string[]>([]);
  const word = "dog";
  const [inputWord, setInputWord] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);

  useEffect(() => {
    if (inputWord === word || inputWord === "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [inputWord]);

  return (
    <div className="flex flex-col justify-center items-center mt-24  text-xl">
      {/* white , green gut, red not  */}
      <div className="my-8">{word}</div>
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
