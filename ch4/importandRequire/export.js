// let myVariable = 942

// let func1 = () => {
// 	console.log("Hello from func1")
// }

// let func2 = () => {
// 	console.log("Hello from func2")
// }


// 第一種做法
// module.exports.myVar = myVariable
// module.exports.func1 = func1
// module.exports.func2 = func2

//第二種做法
// module.exports = {
// 	myVar : myVariable,
// 	func1 : func1,
// 	func2 : func2
// }

//ES6

export let myVar = 942
export let func1 = () => {
	console.log("Hello from func1")
}

export let func2 = () => {
	console.log("Hello from func2")
}


