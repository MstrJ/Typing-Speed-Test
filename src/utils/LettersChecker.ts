const LettersChecker = (
  inputWord: string,
  word: string,
  setInvalidLettersIndex: any,
  setValidLettersIndex: any
) => {
  const invalidLettersIndex = [];
  const validLettersIndex = [];
  for (let i = 0; i < inputWord.length; i++) {
    if (inputWord[i] !== word[i]) {
      invalidLettersIndex.push(i);
    } else {
      validLettersIndex.push(i);
    }
  }
  setInvalidLettersIndex(invalidLettersIndex);
  setValidLettersIndex(validLettersIndex);
};

export default LettersChecker;
