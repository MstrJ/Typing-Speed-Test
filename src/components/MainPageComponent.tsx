import React from "react";
import WordsForm from "./WordsForm";

const MainPageComponent = () => {
  return (
    <main className="size-screen">
      <h1 className="text-center text-[#E6E6E6] text-[82px] font-Bungee">
        Typing Speed Test
      </h1>
      <WordsForm />
    </main>
  );
};

export default MainPageComponent;