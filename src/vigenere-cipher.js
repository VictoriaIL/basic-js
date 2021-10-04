import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor(type) {
    if(arguments[0] === undefined || type == true) {
      this['direct'] = true;
    } else {
      this['direct'] = false;
    }
  }
  encrypt(message, key) {
    if(Array.from(arguments).filter(arg => typeof arg === 'string').length !== 2) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    let encryptedMessage = '';

    for(let i = 0, j = 0; i < message.length; i++) {
      if(message.charCodeAt(i) >= 65  && message.charCodeAt(i) <= 90) {
        let messageSymbolCode = message.charCodeAt(i) - 65;
        let keySymbolCode = key.charCodeAt(j) - 65;
        let encryptedSymbolCode = (keySymbolCode + messageSymbolCode) % 26 + 65;
        encryptedMessage += String.fromCharCode(encryptedSymbolCode);
        j++;
      } else {
        encryptedMessage += message[i];
      }

      if(j == key.length) j = 0;
    }

    if(!this['direct']) {
      encryptedMessage = encryptedMessage.split("");
      encryptedMessage = encryptedMessage.reverse();
      let temp = '';
      for(let i = 0; i < encryptedMessage.length; i++) {
        temp += encryptedMessage[i];
      }

      encryptedMessage = temp;
    }

    return encryptedMessage;
  }

  decrypt(message, key) {
    if(Array.from(arguments).filter(arg => typeof arg === 'string').length !== 2) throw new Error('Incorrect arguments!');

    message = message.toUpperCase();
    key = key.toUpperCase();
    let decryptedMessage = '';

    for(let i = 0, j = 0; i < message.length; i++) {
      if(message.charCodeAt(i) >= 65  && message.charCodeAt(i) <= 90) {
        let messageSymbolCode = message.charCodeAt(i) - 65;
        let keySymbolCode = key.charCodeAt(j) - 65;
        let decryptedSymbolCode = (26 + messageSymbolCode - keySymbolCode) % 26 + 65;
        decryptedMessage += String.fromCharCode(decryptedSymbolCode);
        j++;
      } else {
        decryptedMessage += message[i];
      }

      if(j == key.length) j = 0;
    }

    if(!this['direct']) {
      decryptedMessage = decryptedMessage.split("");
      decryptedMessage = decryptedMessage.reverse();
      let temp = '';
      for(let i = 0; i < decryptedMessage.length; i++) {
        temp += decryptedMessage[i];
      }

      decryptedMessage = temp;
    }

    return decryptedMessage;

  }
}
