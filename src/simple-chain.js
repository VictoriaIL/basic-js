import {NotImplementedError} from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
    chains: [],

    getLength() {
        return this.chains.length;
    },

    addLink(value) {
        this.chains.push(value == undefined ? '( null )' : '( ' + value + ' )')

        return this;
    },

    removeLink(position) {
        if ((typeof position) !== 'number' || position <= 0 || position > this.chains.length || !Number.isInteger(position)) {
            this.chains = [];
            throw new Error('You can\'t remove incorrect link!');
        }

        this.chains.splice(position - 1, 1);

        return this;
    },

    reverseChain() {
        this.chains.reverse();
        return this;
    },

    finishChain() {
        const chain = this.chains.length > 1 ? this.chains.join('~~') : this.chains[0];
        this.chains = [];

        return chain;
    }
}
