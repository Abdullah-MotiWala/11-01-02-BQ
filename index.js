// alert("Karachi")
// var a = 123
// var a = 321
// a = 456
// var a = "Name" //string
// var a1 = 'Name1' //string
// var a2 = `Name2` //string
// var b = 123 //Number
// var b1 = 123.56 //Number
// var c = true //boolean
// var c1 = false //boolean

// var d = null //Null
// var e = undefined //Undefined

// var f = [1, 2, 3, 4] //Array
// var g = { name: "Name", fName: "FName" } //Object
// // console.log(a)

// // alert(a)
// // Numbers
// // var sum = b / b1 + 3
// // console.log(sum.toFixed(2), "sum")
// // console.log(sum, "sum1")

// // b = b + 5
// // console.log(b, "sum1")


// var numberDigit = 12
// var stringDigit = "12"

// var sum = numberDigit + "5"
// var sum1 = stringDigit + "5"
// var sum3 = stringDigit - "5"
// var sum4 = numberDigit - "5"
// var sum5 = numberDigit / "5"
// var sum6 = "5" + numberDigit
// var sum7 = "5" - numberDigit
// var sum8 = "5" / numberDigit
// var sum9 = 6 % 2
// var sum10 = 5
// console.log(sum10, 1)
// console.log(sum10 + 1, 2) //long method
// console.log(sum10 += 1, 3) // short hand
// console.log(sum10++, 4)
// console.log(++sum10, 5)


// // console.log(sum, sum1, sum3, sum4, sum5, sum6, sum7, sum8, sum9)

// var newVarDigit = "camel case"
// var new_var_digit = "snake case"
// var NewVarDigit = "pascal case"
// var Kebab_Case = "kebab case"

// var hello = "Hello"
// // var greeting = hello + " " + "World"
// var greeting = `${hello} World`
// console.log(greeting)


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

// var userAge = prompt("Enter your age")
// var isUserFatherBusinessMan = prompt("Is your father a business man")

// if (userAge >= 22 && isUserFatherBusinessMan === "No") { alert("Do Hardwork") }
// else if (userAge >= 22 && isUserFatherBusinessMan === "Yes") { alert("Don't rely on parent Do Hardwork") }
// else { alert("Enjoyeee") }

// var age = prompt("Enter your age")
// var name = prompt("Enter your name")
// if (age < 18) {
//     alert(`${name} is underage`)
// }
// else if (age >= 18) { alert(`${name} is adult`) }


// var myArray = [null, "String", 123, { a: 1 }, [1, 2], false, undefined, age]

var city0 = "Atlanta";
var city1 = "Baltimore";
var city2 = "Chicago";

// var city = ["Atlanta", "Baltimore", "Chicago"]
// console.log(city, 1)
// // alert(`Welcome to ${city2}`)
// // alert(`Welcome to ${city[2]}`)
// city.push("New York", "Karachi", "Lahore", "Islamabad")
// console.log(city, 2)
// city.unshift("California", "Karachi", "Lahore", "Islamabad")
// console.log(city, 3)
// city.shift()
// console.log(city, 4)
// city.pop()
// console.log(city, 5)

// const classes = ["09-11", "11-01", "01-03"]
// classes.length = 1
// console.log(classes)
// let students = [];
// if (true) {
//     students = ["1", "2", "3"]
// } else {
//     students = ["4", "5", "6"]
// }

// classes.splice(1, 1, "11-12", "12-01")
// console.log(classes)

// Ask user name
// user father name
// user mother name
// user father surname
// user mother surname
// ask mother community
// ask father community
// if same remove surename of
// let flag = true
// if(user){
//     flag = false
// }
// const cities = ["Karachi", "Hyderabad", "Lahore"]
// for (let i = 0; i < cities.length; i++) {
//     for (let j = 5; j > 0; j--) {
//         console.log(j, "j", i)
//     }
// // }
// let flag = false
// let currentStudents = 0;
// const maximumCapacity = 50;
// const totalStudentInBatches = [25, 5, 15, 26, 13, 1, 10]
// for (let i = 0; i < totalStudentInBatches.length; i++) {
//     if (flag === true) {
//         alert(`We have reached capacity, Please consider only ${i} batches`)
//         break;
//     }
//     currentStudents += totalStudentInBatches[i];
//     if (currentStudents + totalStudentInBatches[i + 1] > 50) {
//         flag = true
//     }
// }

// for (let i = 2; i <= 20; i += 2) {
//     console.log(i)
// }

const numbersArray = [1, 3, 4, 5, 6, 7, 5, 11, 5, 12, 4, 14, 9]
for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] % 2 !== 0) {
        continue;
    }
    console.log(numbersArray[i])
}