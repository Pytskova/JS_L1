function solution(str) {
    let result = [];

    for (let i = 0; i < str.length; i += 2) {
        let pair = str[i] + (str[i + 1] || '_'); // Если символа нет, добавляем "_"
        result.push(pair);
    }

    return result;
}

// Примеры
console.log(solution("abc"));    // ["ab", "c_"]
console.log(solution("abcdef")); // ["ab", "cd", "ef"]
console.log(solution("a"));      // ["a_"]
console.log(solution(""));       // []
console.log(solution("hello!")); // ["he", "ll", "o!"]
