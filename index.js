//const NumberArray = require("./lib/NumberArray")
const NumberArray = require("./lib/NumberArray")
const arr =[5,3,2,1,11,77,600,600,543,221,56]
console.log(NumberArray.min(arr))
console.log(NumberArray.max(arr))
console.log(NumberArray.avg(arr))
console.log(NumberArray.filter(arr,"even"))
console.log(NumberArray.filter(arr,"odd"))
console.log(NumberArray.filter(arr,"divinder")) // пусто т к нет значения?
console.log(NumberArray.filter(arr,"odd",4))
console.log(NumberArray.count(arr, 600))
console.log(NumberArray.getDictionary(arr))