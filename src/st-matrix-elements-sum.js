import {NotImplementedError} from '../extensions/index.js';

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
export default function getMatrixElementsSum(matrix) {
    return matrix.reduce((sum, row, rowIndex) => {
        if (rowIndex === 0) {
            return row.reduce((acc, el) => acc + el);
        }

        const subSum = row.reduce((acc, el, columnIndex) => {
                if (matrix[rowIndex - 1][columnIndex] === 0) {
                    return acc;
                } else {
                    return acc + el
                }
            }, 0
        )

        return sum + subSum;
    }, 0)
}
