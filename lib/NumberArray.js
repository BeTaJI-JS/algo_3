// Функции числовых массивов. Часть 1.
// min - минимальное число
// max - максимальное число
// avg - среднее арифметическое

const min = (arr) => {
    let minNum = arr[0];
    for (let el of arr) {
        if (el < minNum) {
            minNum = el;
        }
    }
    return minNum;
}

const max = (arr) => {
    let maxNum = 0;
    for (let el of arr) {
        if (el > maxNum) {
            maxNum = el;
        }
    }
    return maxNum;
}

const avg = (arr) => {
    let sumEl = 0;
    for (let i = 0; i < arr.length; i++) {
        sumEl = sumEl + arr[i]
    }
    return sumEl / arr.length
}

// Функции числовых массивов. Часть 2.
// filter с аргументами
// even - чётные
// odd - нечётные
// div - кратные 
// count - подсчёт элемента
// getDictionary - получение словаря с количеством аргументов

const filter = (arr, type, divinder) => {
    let evenNum = [];
    let oddNum = [];
    let divNum = [];
    for (let item of arr) {
        if (item % 2 === 0) {
            evenNum = item
        }
        if (item % 2 !== 0) {
            oddNum = item
        }
        if (item % divinder === 0) {
            divNum = item
        }
    }
    if (type === "even") {
        return evenNum;
    }
    if (type === "odd") {
        return oddNum;
    }
    if (type === "divinder") {
        return divNum;
    }
}

const count = (arr, searchItem) => {
    let counterEl = 0;
    for (let item of arr) {
        if (searchItem === item) {
            counterEl += 1;
        }
    }
    return counterEl;
}


const getDictionary = (arr) => {
    const dictionary = {};
    for (let elem of arr) {
        if (!dictionary[elem]) {
            dictionary[elem] = 0;
        }
        dictionary[elem] += 1;
    }
    return dictionary;
}


module.exports = {
    min,
    max,
    avg,
    filter,
    count,
    getDictionary
}