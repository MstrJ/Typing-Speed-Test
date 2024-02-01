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
      placeholder=""
      disabled={props.disabled}
      className={`${twMerge(props.className)} ${
        props.disabled ? " cursor-not-allowed" : ""
      }  outline-none ring-0 ${
        props.isValid ? "text-white  ring-[#3F3D56]" : "text-dred  ring-dred"
      }  rounded-md bg-transparent c   duration-200 focus:ring-4 px-0 py-2 focus:border-0  `}
    />
  );
};

export default Input;
