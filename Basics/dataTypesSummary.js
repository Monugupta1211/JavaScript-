// Primitive Data types

//    -> String, Number, Boolean, Null, undefined, Symbol, BigInt

const score=23
const scoreValue =35

const isLoggedIn = false ;
const outsideTemp = null;
let userEmail;  // undefined;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(typeof id)

// console.log(id === anotherId)// false

// const bigNumber =2324587348758273
 



// Reference (Non primitive)

// Array, Objects, Functions

// Array
const heros = ["shaktiman", "Amitabh B", "Ajay Devgon"]
console.log(typeof heros)//object 

// Object
let myObj = {
    name:"Monu Gupta",
    age:22,
}
console.log(typeof myObj)//object

// function

const myFunction = function(){
    console.log("Hello World");
}
console.log(typeof myFunction)//function
