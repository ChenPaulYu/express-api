let hotRed = {}

hotRed = {
	sound : 'vrooom',
	soundOff : function(){
		console.log(this.sound)
	}
}

let soundFunction = hotRed.soundOff
soundFunction() //連結斷掉了

//用bind把連結接上
let boundSoundFunction = soundFunction.bind(hotRed)
boundSoundFunction()


let person1 = {
	name : 'Joe'
}

let person2 = {
	name : 'Jane'
}

function logName(){
	return this.name
}

console.log(logName())
console.log(logName.bind(person1)()) //類似concat
console.log(logName.bind(person2)())

let number = {
	x : 24,
	y : 22
}

let count = function(){
	console.log(this.x+this.y)
}

let boundCount = count.bind(number)
boundCount()










