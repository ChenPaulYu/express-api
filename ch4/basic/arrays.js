let myStuff = ['baseball','football',32,true,'Magic Mouse']

// Array Methods
// pop => 把最後一個取出來

let popValue = myStuff.pop()

console.log(popValue)
console.log(myStuff)

myStuff.push(popValue)

console.log(myStuff)

// shift => 把第0個取出來

let shiftValue = myStuff.shift()

console.log(shiftValue)
console.log(myStuff)

// unshift => 把東西放進第0個

myStuff.unshift(shiftValue)
console.log(myStuff)

// concat => 把多個array合起來

let array1 = [1,2,3]
let array2 = [4,5,6]

let concatArray = array1.concat(array2)

console.log(concatArray)

let array3 = [7,8,9]

let concatArray2 = array1.concat(array2,array3)

console.log(concatArray2)

// reverse => 把array反轉

let reverseArray = concatArray2.reverse()
console.log(reverseArray)

// sort 

let statesArray = ['a','c','b','a']
let sortedArray = statesArray.sort()

console.log(sortedArray)

let numericArray = [223,3,83,2399,23,5,8]
let sortedNumericArray = numericArray.sort((a,b) =>  b-a)

console.log(sortedNumericArray)

// slice

var slicedStates = sortedArray.slice(2,3)
console.log(slicedStates)
slicedStates = sortedArray.slice(2)
console.log(slicedStates)


















