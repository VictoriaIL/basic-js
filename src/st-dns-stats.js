import {NotImplementedError} from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
    return domains.map(domain => {
        const subDomains = domain.split('.').reverse();
        const tokens = Array.from({length: subDomains.length}, (k, v) => v)
            .reduce((acc, _, index) => {
                acc.push('.' + subDomains.slice(0, index + 1).join('.'));

                return acc;
            }, [])

        return tokens;
    })
        .reduce((acc, subDomains) => {
            subDomains.map(subDomain => {
                acc[subDomain] = acc[subDomain] != null ? acc[subDomain] + 1 : 1
            })

            return acc;
        }, {});


}
