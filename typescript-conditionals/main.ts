/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person: { name: string; age: number }): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person: { name: string; age: number }): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person: {
  name: string;
  age: number;
}): unknown {
  if (person.age > 0) {
    return false;
  }
}

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'dune';
    case 'comedy':
      return 'Dumb and Dumber';
    case 'horror':
      return 'The Exorcist';
    case 'drama':
      return 'The Notebook';
    case 'musical':
      return 'The Greatest Showman';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}
