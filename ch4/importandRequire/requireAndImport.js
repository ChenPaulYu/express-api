
// let myFuncs = require('./export') // ./代表現在的資料夾
// console.log('The value of myVar is ' + myFuncs.myVar)
// myFuncs.func1()
// myFuncs.func2()


// ES6 => npm run dev 以啟動

import { myVar, func1, func2 } from './export';


console.log('The value of myVar is ' + myVar)
func1()
func2()