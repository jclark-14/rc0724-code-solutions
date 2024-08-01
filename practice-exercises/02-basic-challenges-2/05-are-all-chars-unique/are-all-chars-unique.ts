export function areAllCharactersUnique(str: string): boolean {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) > 0) {
      return false;
    }
  }
  return true;
}

// const charObj: Record<string, boolean> = {};
//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (charObj[char]) {
//       return false;
//     }
//     charObj[char] = true;
//   }
//   return true;
// }
