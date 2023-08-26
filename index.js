// alert("Karachi")
// var a = 123
// var a = 321
// a = 456
var a = "Name" //string
var a1 = 'Name1' //string
var a2 = `Name2` //string
var b = 123 //Number
var b1 = 123.56 //Number
var c = true //boolean
var c1 = false //boolean

var d = null //Null
var e = undefined //Undefined

var f = [1, 2, 3, 4] //Array
var g = { name: "Name", fName: "FName" } //Object
// console.log(a)

// alert(a)
// Numbers
// var sum = b / b1 + 3
// console.log(sum.toFixed(2), "sum")
// console.log(sum, "sum1")

// b = b + 5
// console.log(b, "sum1")


var numberDigit = 12
var stringDigit = "12"

var sum = numberDigit + "5"
var sum1 = stringDigit + "5"
var sum3 = stringDigit - "5"
var sum4 = numberDigit - "5"
var sum5 = numberDigit / "5"
var sum6 = "5" + numberDigit
var sum7 = "5" - numberDigit
var sum8 = "5" / numberDigit
var sum9 = 6 % 2
var sum10 = 5
console.log(sum10, 1)
console.log(sum10 + 1, 2) //long method
console.log(sum10 += 1, 3) // short hand
console.log(sum10++, 4)
console.log(++sum10, 5)


// console.log(sum, sum1, sum3, sum4, sum5, sum6, sum7, sum8, sum9)

var newVarDigit = "camel case"
var new_var_digit = "snake case"
var NewVarDigit = "pascal case"
var Kebab_Case = "kebab case"

var hello = "Hello"
// var greeting = hello + " " + "World"
var greeting = `${hello} World`
console.log(greeting)


// var userName = prompt(greeting)
// console.log(userName)
// === //strictEqualsTo
// == //equalsTo
// > //greaterThan
// < //smallerThan
// >= //greaterThanOrEqualTo
// <= //smallerThanOrEqualTo
// || //OR
// && //AND

var userAge = prompt("Enter your age")
var isUserFatherBusinessMan = prompt("Is your father a business man")

if (userAge >= 22 && isUserFatherBusinessMan === "No") { alert("Do Hardwork") }
else if (userAge >= 22 && isUserFatherBusinessMan === "Yes") { alert("Don't rely on parent Do Hardwork") }
else { alert("Enjoyeee") }