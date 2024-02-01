const WordChossing = (words: string[], setWord: any, setWords: any) => {
  if (!words) return;
  let chossedWord = words[0];
  setWord(chossedWord);

  words.shift();
  setWords(words);
};
export default WordChossing;
