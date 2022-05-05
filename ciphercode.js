
const cipher = (str) => {

    let reverse = str.split('').reverse().join('');

    let result = '';

    for(let i = 0; i <reverse.length; i++){
        let charCode = (reverse[i].charCodeAt()) + 5;
        
        if (charCode >= 97 && charCode > 122) {
            charCode = charCode - 122 + 96;
        }

        result += String.fromCharCode(charCode);
    }
    return result
}

console.log(cipher('ilovecryptography'));


const decipher = (ciphered) => {

    let result2 = '';

    for(let i = 0; i <ciphered.length; i++){
        let charCode2 = (ciphered[i].charCodeAt()) - 5;

        if (charCode2 <= 96 && charCode2 < 122) {
            charCode2 = charCode2 + 122 - 96;
        }

        result2 += String.fromCharCode(charCode2);
    }

    let deciphered = result2.split('').reverse().join('');

    return deciphered
}

console.log(decipher('dmufwltyudwhjatqn'))
