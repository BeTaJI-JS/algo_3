//3
//avg
const NumberArray = require("./lib/NumberArray")
const arr =[5,3,2,1,11,77,600,600,543,221,56];
const objNumberArray = new NumberArray (arr)

let arr_2= objNumberArray.filter("even");
console.log(arr_2)
const objNumberArray_2 = new NumberArray(arr_2)
let avgArr = objNumberArray_2.avg()
console.log(avgArr)
console.log(objNumberArray_2.count(700))