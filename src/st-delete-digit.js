import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let resultArr = [];
  n.toString().split('').forEach(item => {
    resultArr.push(+n.toString().replace(item, ''))
  });
  return resultArr.sort((a,b) => a - b)[ resultArr.length -1 ];
}
