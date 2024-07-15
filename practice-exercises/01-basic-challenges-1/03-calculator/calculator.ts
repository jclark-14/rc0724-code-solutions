export function calculator(
  num1: number,
  num2: number,
  operator: string
): number {
  if (operator === '+') {
    return num1 + num2;
  } else if (operator === '-') {
    return num1 - num2;
  } else if (operator === '*') {
    return num1 * num2;
  } else if (operator === '/') {
    return num1 / num2;
  } else {
    throw new Error(`Invalid operator: ${operator}`);
  }
}
