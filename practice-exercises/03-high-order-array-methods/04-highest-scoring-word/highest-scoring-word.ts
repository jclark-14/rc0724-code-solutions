export function highestScoringWord(str: string): string {
  const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
  let valuesArr: number[] = [];
  const wordScore: number[] = [];
  const originalArrValues: number[] = [];
  const words = str.split(' ');
  const letterValues = words.forEach((word): any => {
    const wordSplit = word.split('').map((letter): number[] => {
      valuesArr.push(alphabet.indexOf(letter));
      return valuesArr;
    });
    originalArrValues.push(
      valuesArr.reduce((total, num) => {
        return total + num;
      }, 0)
    );
    wordScore.push(
      valuesArr.reduce((total, num) => {
        return total + num;
      }, 0)
    );
    valuesArr = [];
  });
  const sortedArr = wordScore.sort((num1, num2): any => {
    return num1 - num2;
  });
  const highValue = sortedArr[sortedArr.length - 1];
  const winner = words[originalArrValues.indexOf(highValue)];
  return winner;
}
