import {NotImplementedError} from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
export default function transform(arr) {
    if (!(arr instanceof Array)) throw new Error("'arr' parameter must be an instance of the Array!");

    let isNextDiscardOnPrevStep = false;

    function resetFlags(){
        isNextDiscardOnPrevStep = false;
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        switch (arr[i]) {
            case '--discard-next':
                i++;

                resetFlags();

                isNextDiscardOnPrevStep = true;
                break;

            case '--discard-prev':
                if(!isNextDiscardOnPrevStep) {
                    result.pop();
                }

                resetFlags();

                break;

            case '--double-next':
                if (i + 1 !== arr.length) {
                    result.push(arr[i + 1]);
                }

                resetFlags();

                break;

            case '--double-prev':
                if (i !== 0 && !isNextDiscardOnPrevStep) {
                    result.push(arr[i - 1]);
                }

                resetFlags();

                break;


            default:
                result.push(arr[i]);

                resetFlags();
        }
    }

    return result;
}
