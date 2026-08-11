let score= 33

console.log(typeof (score))

let score2= "33"
console.log (typeof score2) // type>string

let valueInNumber= Number (score2)
//This means that you are converting score2 from string to number.
console.log(typeof valueInNumber) // we get the type "number"

// let us see what happens if we input a number with letter
let score3= "56 abc"
let valueNow= Number (score3)
console.log(typeof valueNow) // Now Javascript will throw this result as number
//let us check what actually is inside valueNow
console.log(valueNow) /// Javascript throws "NaN" not a number errror

// it means that although 56abc is converted in number, but it is actually not a  true number.


let score4 = null
console.log(typeof score4) // obviously its type is object
let rishu = Number(score4)
console.log(typeof rishu)
console.log(rishu)
//Sumarry for score4 >>>
//when we passed the variable score4 in number , it gets converted into a number.
// but when we actually tried to print what actually inside rishu, we get 0.
//

let score5 = undefined
let visu =Number (score5)
console.log(visu)/// Not A Number
console.log(typeof visu)// this will always show a number because it has been converted.

//// Some Boolean conversion results.

//1. 


