export function areAllCharactersUnique(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) > 0) {
      return false;
    }
  }
  return true;
}
