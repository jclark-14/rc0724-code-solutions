import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

describe('evenNumbers', () => {
  it('should return an empty array when given an empty array', () => {
    expect(evenNumbers([])).toEqual([]);
  });

  it('should return only even numbers from the input array', () => {
    expect(evenNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
  });

  it('should return an empty array when there are no even numbers', () => {
    expect(evenNumbers([1, 3, 5, 7, 9])).toEqual([]);
  });

  it('should handle negative numbers correctly', () => {
    expect(evenNumbers([-2, -1, 0, 1, 2])).toEqual([-2, 0, 2]);
  });
});

describe('toDollars', () => {
  it('formats whole numbers correctly', () => {
    expect(toDollars(5)).toBe('$5.00');
    expect(toDollars(100)).toBe('$100.00');
    expect(toDollars(0)).toBe('$0.00');
  });

  it('handles large numbers', () => {
    expect(toDollars(1000000)).toBe('$1000000.00');
  });

  it('handles negative numbers', () => {
    expect(toDollars(-10)).toBe('$-10.00');
  });

  it('handles decimal numbers', () => {
    expect(toDollars(10.5)).toBe('$10.50');
  });
});

describe('divideBy', () => {
  it('divides numbers in the array by the divisor', () => {
    const numbers = [10, 20, 30, 40, 50];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([5, 10, 15, 20, 25]);
  });

  it('handles decimal results', () => {
    const numbers = [3, 6];
    const result = divideBy(numbers, 4);
    expect(result).toEqual([0.75, 1.5]);
  });

  it('handles empty array', () => {
    const numbers: number[] = [];
    const result = divideBy(numbers, 2);
    expect(result).toEqual([]);
  });
});

describe('multiplyBy', () => {
  it('multiplies numbers in the object', () => {
    const obj = { a: 2, b: 3, c: 4 };
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({ a: 4, b: 6, c: 8 });
  });

  it('ignores non-number values', () => {
    const obj = { a: 2, b: 'hello', c: true, d: 5 };
    const result = multiplyBy(obj, 3);
    expect(result).toEqual({ a: 6, b: 'hello', c: true, d: 15 });
  });

  it('handles empty object', () => {
    const obj = {};
    const result = multiplyBy(obj, 2);
    expect(result).toEqual({});
  });

  it('handles zero multiplier', () => {
    const obj = { a: 5, b: 10, c: 'it' };
    const result = multiplyBy(obj, 0);
    expect(result).toEqual({ a: 0, b: 0, c: 'it' });
  });

  it('handles negative multiplier', () => {
    const obj = { a: 2, b: -3, c: 4 };
    const result = multiplyBy(obj, -1);
    expect(result).toEqual({ a: -2, b: 3, c: -4 });
  });

  it('handles decimal multiplier', () => {
    const obj = { a: 10, b: 20, c: 'hello' };
    const result = multiplyBy(obj, 0.5);
    expect(result).toEqual({ a: 5, b: 10, c: 'hello' });
  });
});
