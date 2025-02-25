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