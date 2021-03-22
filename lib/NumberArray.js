// Функции числовых массивов. Часть 1.
// min - минимальное число
// max - максимальное число
// avg - среднее арифметическое
class NumberArray {
    constructor(arr) {
        this.arr = arr
    }
     min(){
        let minNum = this.arr[0];
        for (let el of this.arr) {
            if (el < minNum) {
                minNum = el;
            }
        }
        return minNum;
    }

    max(){
        let maxNum = 0;
        for (let el of this.arr) {
            if (el > maxNum) {
                maxNum = el;
            }
        }
        return maxNum;
    }

    avg(){
        let sumEl = 0;
        for (let i = 0; i < this.arr.length; i++) {
            sumEl = sumEl + this.arr[i]
        }
        return sumEl / this.arr.length
    }

 filter(type, divinder){
        let evenNum = [];
        let oddNum = [];
        let divNum = [];
        for (let item of this.arr) {
            if (item % 2 === 0) {
                evenNum.push(item)
            }
            if (item % 2 !== 0) {
                oddNum.push(item)
            }
            if (item % divinder === 0) {
                divNum.push(item)
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
    
    // count(searchItem){
    //     let counterEl = 0;
    //     for (let item of this.arr) {
    //         if (searchItem === item) {
    //             counterEl += 1;
    //         }
    //     }
    //     return counterEl;
    // }
    count(searchItem){
        const dictionary = this.getDictionary()
        return dictionary[searchItem] || 0
    }
    
    getDictionary() {
        const dictionary = {};
        for (let elem of this.arr) {
            if (!dictionary[elem]) {
                dictionary[elem] = 0;
            }
            dictionary[elem] += 1;
        }
        return dictionary;
    }
}
module.exports = NumberArray






// Функции числовых массивов. Часть 2.
// filter с аргументами
// even - чётные
// odd - нечётные
// div - кратные 
// count - подсчёт элемента
// getDictionary - получение словаря с количеством аргументов

