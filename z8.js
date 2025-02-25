function expandedForm(num) {
    let strNum = num.toString();
    let result = [];

    for (let i = 0; i < strNum.length; i++) {
        let digit = strNum[i];
        if (digit !== '0') {
            let zeros = '0'.repeat(strNum.length - i - 1);
            result.push(digit + zeros);
        }
    }

    return result.join(' + ');
}

// Примеры
console.log(expandedForm(12));     // "10 + 2"
console.log(expandedForm(45));     // "40 + 5"
console.log(expandedForm(70304));  // "70000 + 300 + 4"
console.log(expandedForm(5607));   // "5000 + 600 + 7"
console.log(expandedForm(9000));   // "9000"
