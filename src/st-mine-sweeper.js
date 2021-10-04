import {NotImplementedError} from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper(matrix) {
    return matrix.map((row, rowIndex) => {
        const rowWithMineCounts = row.map((cell, cellIndex) => {
            // const upperCellPosition = {x: rowIndex - 1, y: cellIndex};
            // const aboveCellPosition = {x: rowIndex + 1, y: cellIndex};
            // const leftCellPosition = {x: rowIndex, y: cellIndex - 1};
            // const rightCellPosition = {x: rowIndex, y: cellIndex + 1};
            // const upperLeftCellPosition = {x: rowIndex - 1,  y: cellIndex - 1};
            // const upperRightCellPosition = {x: rowIndex - 1,  y: cellIndex + 1};
            // const downLeftCellPosition = {x: rowIndex + 1,  y: cellIndex - 1 };
            // const downRightCellPosition = {x: rowIndex + 1,  y: cellIndex + 1};

            const neighborsCells = [
                {x: rowIndex - 1, y: cellIndex},
                {x: rowIndex + 1, y: cellIndex},
                {x: rowIndex, y: cellIndex - 1},
                {x: rowIndex, y: cellIndex + 1},
                {x: rowIndex - 1, y: cellIndex - 1},
                {x: rowIndex - 1, y: cellIndex + 1},
                {x: rowIndex + 1, y: cellIndex - 1},
                {x: rowIndex + 1, y: cellIndex + 1},
            ];

            const minesSum = neighborsCells.reduce((acc, {x, y}) => {
                if (x < 0 || x >= matrix.length) {
                    return acc;
                }

                const row = matrix[x];

                if (y < 0 || y >= row.length) {
                    return acc;
                }

                return acc + (row[y] ? 1 : 0)
            }, 0)

            return minesSum;
        })

        return rowWithMineCounts;
    })
}
