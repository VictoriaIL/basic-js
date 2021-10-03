import {NotImplementedError} from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  if(!Array.isArray(members) ){
    return false;
  }

  const nameOfTeam = members.map(item => {
    if (typeof item !== 'string') return '';
    if (item[0] === ' ') {
      return item.toUpperCase().split('').find(el => {
        if (el !== ' ') return el;
      })
    }
    return item[0].toUpperCase();
  }).sort().join('');
  if (nameOfTeam === '') return false;
  return nameOfTeam;
}

