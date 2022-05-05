function caesarCipher(s, k) {
    let result = '';

    for (let i = 0; i < s.length; i++) {
        const charCode = s.charCodeAt(i);
        console.log(charCode);

        if (
            (charCode < 65 || charCode > 122) ||
            (charCode > 90 && charCode < 97)
        ) {
            result += s[i];
        } else {
            let newCharCode = charCode + Math.ceil(k % 26);
            console.log(newCharCode);

            if (charCode >= 97 && newCharCode > 122) {
                newCharCode = newCharCode - 122 + 96;
                console.log(newCharCode - 122 + 96);
            }

            result += String.fromCharCode(newCharCode);
        }
        console.log('split');
    }

    console.log(result);
    return result
}

caesarCipher('ql zrq altk lk olqxqflkp', 3);
