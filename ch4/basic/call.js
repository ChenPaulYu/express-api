let obj = {
	num : 2
}

let addToThis = function(a,b,c){
	return this.num + a + b + c
}


// call 

console.log(addToThis.call(obj,1,2,3))


let person1 = {
	firstName : 'Jack',
	lastName : 'Davis'
}

let person2 = {
	firstName : 'Mark',
	lastName : 'Price'
}

function hello(greeting){
	console.log(greeting + ' '+ this.firstName +' '+ this.lastName )
}

hello.call(person1,'what\'s up')
hello.call(person2,'Yo')