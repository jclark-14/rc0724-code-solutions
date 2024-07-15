export function findMissingNumber(arr: number[]): number | undefined {
  const result = 0;
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  const arrSum = ((arr.length + 1) * (arr.length + 2)) / 2;
  const difference = arrSum - sum;
  return difference;
}
