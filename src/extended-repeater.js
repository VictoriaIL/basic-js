import {NotImplementedError} from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
    options.separator = options.separator != null ? options.separator : '+';
    options.additionSeparator = options.additionSeparator != null ? options.additionSeparator : '|';
    options.repeatTimes = options.repeatTimes != null ? options.repeatTimes : 1;
    options.additionRepeatTimes = options.additionRepeatTimes != null ? options.additionRepeatTimes : 1;

    options.addition = options.addition != null ? `${options.addition}` :
        options.addition === null ? 'null' : '';

    str = str != null ? `${str}`.toString() :
        str === null ? 'null' : '';

    const finalAddition = Array.from({length: options.additionRepeatTimes}, (k, v) => v)
        .map(() => options.addition)
        .join(options.additionSeparator);

    const strWithFinalAddition = str + finalAddition;

    return Array.from({length: options.repeatTimes}, (k, v) => v)
        .map(() => strWithFinalAddition)
        .join(options.separator);
}
