export type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;
export type Simulation = {
  dice1: DiceRoll;
  dice2: DiceRoll;
  sum: number;
  result: 'win' | 'lose' | 'roll again';
};

export function diceGameSimulation(numSimulations: number): Simulation[] {
  const arr: Simulation[] = [];
  for (let i = 0; i < numSimulations; i++) {
    const dice1 = Math.floor(Math.random() * 6 + 1) as DiceRoll;
    const dice2 = Math.floor(Math.random() * 6 + 1) as DiceRoll;
    const sum = dice1 + dice2;
    let result: Simulation['result'];
    if (sum === 7 || sum === 11) {
      result = 'win';
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = 'lose';
    } else {
      result = 'roll again';
    }
    arr.push({
      dice1,
      dice2,
      sum,
      result,
    });
  }

  return arr;
}
