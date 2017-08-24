//立即使用function

let sayGreeting = (function(){
	return 'Hi,How are you?'
}())
console.log(sayGreeting)

let sayGreeting2 = (function(firstname,lastname){
	return 'Hi,Howa are you? '+firstname+' '+lastname
}('PAUL','CEHN'))

console.log(sayGreeting2)

//Arrow function, 把{}改成=> , 不需要return

let speakNames = (firstname,secondname) => 'Hello,'+firstname+' '+secondname


console.log(speakNames('Jack','Jill'))