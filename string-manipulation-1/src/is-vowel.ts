/* exported isVowel */
function isVowel(char: string): boolean {
  let result = false;
  const vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      result = true;
    }
  }
  return result;
}
