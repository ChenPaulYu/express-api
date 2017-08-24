//ES6 Enhanced Object Literal Syntax

function createVehicle(make,model,year) {
	return {
		make,  // make : make
		model, // model: model
		year,  // year : year
		getFullDescription: function(){
			return year + ' ' + make + ' ' + model 
		}
	}
}


let mytrunk = createVehicle('Dodge','Ram 1500','2011')
let myWifesCar = createVehicle('Dodge','Charger R/T','2015')
let myDuaghterCar = createVehicle('Nissan','Rouge','2016')

console.log(mytrunk.getFullDescription())
console.log(myWifesCar.getFullDescription())
console.log(myDuaghterCar.getFullDescription())
