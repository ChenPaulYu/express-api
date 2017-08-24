
let array = [1,2,3,4,5]

console.log('============forEach')

array.forEach(function(value){
	console.log(value)
})

console.log('============forEach with arrow function')

array.forEach((value) => console.log(value))


let grades = [98,87,50,61,70]
let sum = 0

console.log('============Grades')


grades.forEach((grades) => sum+=grades)
let average = sum/grades.length
console.log('Our average is ' + average.toFixed(2)) // toFixed(num) 取得小數點下第幾位


// map => iterate through an array and perform some operation on each element

let arrayNumber = [1,2,3,4,5]

let addOneMap = arrayNumber.map((value) => value+1) 

console.log(addOneMap)



let vehicles = [
	{ make : 'Dodge', mondel : 'Ram 1500', year : '2015', is4WD : true},
	{ make : 'Dodge', mondel : 'Charger R/T', year : '2014', is4WD : false},
	{ make : 'Nissan', mondel : 'Rouge', year : '2016', is4WD : true}
]

let mondels = vehicles.map( vehicle => vehicle.mondel)
console.log(mondels)


// Filter => 回傳所有符合條件的元素

let filteredVehicles = vehicles.filter( vehicle => vehicle.make === 'Dodge')
console.log(filteredVehicles)

// FIND => 回傳第一個符合條件的元素

let vehicle = vehicles.find( vehicle => vehicle.make === 'Dodge')
console.log(vehicle)

// Every => 檢查陣列裡所有的元素是否有符合條件, 有=>回傳true , 否=>回傳false

let areaAll4WD = vehicles.every(function(vehicle){
	return vehicle.is4WD === true
})

console.log(areaAll4WD)

// Some 檢查陣列裡的元素是否有符合條件,任一符合及ok, 有=>回傳true , 否=>回傳false

areaAll4WD = vehicles.some(function(vehicle){
	return vehicle.is4WD === true
})

console.log(areaAll4WD)

// Reduce 

let grades_ = [98,91,70,20,60]

let total = grades_.reduce (function(sum,grade) {

	return sum + grade

}, 0) // 設定初始值 sum = 0

console.log('total: ' + total)
console.log('average: ' + (total/grades_.length).toFixed(2))

















