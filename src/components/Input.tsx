import React from "react";
import { twMerge } from "tailwind-merge";

const Input = (props: {
  className: any;
  isValid: boolean;
  setInputWord: React.Dispatch<React.SetStateAction<string>>;
  inputWord: string;
  disabled?: boolean;
}) => {
  return (
    <input
      type="text"
      value={props.inputWord}
      onChange={(e) => props.setInputWord(e.target.value)}
      placeholder="Write word..."
      disabled={props.disabled}
      className={`${twMerge(props.className)}  outline-none ring-0 ${
        props.isValid ? "text-white  ring-[#3F3D56]" : "text-dred  ring-dred"
      }  rounded-md bg-transparent  active:ring-2 duration-200 focus:ring-4 px-2 py-3  `}
    />
  );
};

export default Input;
