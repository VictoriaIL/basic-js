import {NotImplementedError} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(word) {
    let wordArr = word.split('');
    let resultArray = [];
    let count = 1;
    wordArr.forEach((letter, index, arr) => {
        if (letter === arr[index + 1]) count += 1
        else {
            if (count === 1) {
                resultArray.push(letter)
            } else resultArray.push(count + letter);
            count = 1;
        }
    });

    return resultArray.join('');
}
