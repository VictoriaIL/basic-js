import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  const domain = email.slice(email.indexOf('@') + 1);
  if ( !domain[0].match(/^[a-zA-z1-9]+$/)) return getEmailDomain(domain)
  else return domain;
}
