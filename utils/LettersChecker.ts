const LettersChecker = (
  inputWord: string,
  word: string,
  setInvalidLetterIndex: any,
  setValidLetterIndex: any
) => {
  const invalidLetterIndex = [];
  const validLetterIndex = [];
  for (let i = 0; i < inputWord.length; i++) {
    if (inputWord[i] !== word[i]) {
      invalidLetterIndex.push(i);
    } else {
      validLetterIndex.push(i);
    }
  }
  setInvalidLetterIndex(invalidLetterIndex);
  setValidLetterIndex(validLetterIndex);
};

export default LettersChecker;
