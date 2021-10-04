import { NotImplementedError } from '../extensions/index.js';

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let numberOfTurns = 0;
  for (let i = 1; i <= disksNumber; i++) {
    numberOfTurns = i === 1 ? 1 : 2 * numberOfTurns + 1;
  }

  const seconds = Math.floor(numberOfTurns / (turnsSpeed / 3600));

  const result = {turns: numberOfTurns, seconds};
  return result;
}
