import { stringify } from 'ts-jest';

export function countOccurrences(str: string, char: string): number {
  let result = 0;

  for (let i = 0; i < str.length; i++) {
    if (char === str[i]) {
      result++;
    }
  }
  return result;
}
