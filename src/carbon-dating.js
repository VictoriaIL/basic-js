import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity ) {
  const sampleActivityNumber = Number.parseFloat(sampleActivity);

  if(
      !(typeof sampleActivity === 'string') ||
      Number.isNaN(sampleActivityNumber) ||
      sampleActivityNumber <= 0 ||
      sampleActivityNumber > MODERN_ACTIVITY
  ) {
     return false;
  }

  const t = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivityNumber)  / (0.693 / HALF_LIFE_PERIOD));

  return t;
}
