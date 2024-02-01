import React from "react";
import WordsForm from "./WordsComponent";

const MainPageComponent = () => {
  return (
    <main className="size-screen">
      <div className="text-center text-[#E6E6E6] text-2xl mt-4 underline decoration-2 duration-300 hover:decoration-dred decoration-dcyan underline-offset-2 font-thin font-Hanuman">
        Typing Speed Test
      </div>
      <div className="text-center text-[#E6E6E6] text-6xl mt-3 font-bold font-Hanuman">
        Check your typing skills
      </div>
      <WordsForm />
    </main>
  );
};

export default MainPageComponent;
