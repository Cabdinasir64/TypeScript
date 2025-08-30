// Variables
let Height: number = 180.899
let City: string = "Mogadishu"

console.log("My Height is " + Height + " cm")
console.log("My City is " + City)
console.log("Height" + Height.toFixed(2))
console.log("Height" + Height.toLocaleString())
console.log("Height" + Height.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 }))
console.log(`I am from ${City} and my height is ${Height.toFixed(2)} cm`)
console.log("City " + City.toLocaleUpperCase())
