const WordChossing = (words: string[], setWord: any, setWords: any) => {
  if (!words) return;
  let chossedWord = words[0];
  setWord(chossedWord);

  let newWords = words.filter((word) => word !== chossedWord);
  setWords(newWords);
};
export default WordChossing;
