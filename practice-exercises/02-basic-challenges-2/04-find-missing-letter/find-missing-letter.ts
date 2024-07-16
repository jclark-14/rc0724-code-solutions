export function findMissingLetter(arr: string[]): string | undefined {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let formattedStr = '';
  let letter = '';
  for (let i = 0; i < arr.length; i++) {
    const formattedChar = arr[i].toLowerCase();
    formattedStr += formattedChar;
  }

  const strI = alphabet.indexOf(formattedStr[0]);
  const alphabetSlice = alphabet.slice(strI, strI + arr.length);

  for (let j = 0; j < formattedStr.length; j++) {
    if (formattedStr[j] !== alphabetSlice[j]) {
      letter = alphabetSlice[j];
      if (alphabet.indexOf(arr[0]) < 0) {
        letter = letter.toUpperCase();
      }
      return letter;
    }
  }
  return undefined;
}
