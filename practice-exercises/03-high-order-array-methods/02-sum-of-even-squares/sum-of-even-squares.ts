export function sumOfEvenSquares(numbers: number[]): number {
  const evenNums = numbers.filter((num) => {
    return num % 2 === 0;
  });
  const squaredNums = evenNums.map((num) => {
    return num * num;
  });
  const sum = squaredNums.reduce((total, num) => {
    return total + num;
  }, 0);
  return sum;
}
