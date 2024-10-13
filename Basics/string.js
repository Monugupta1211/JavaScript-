// console.log(typeof String)
// const name = "Monu Gupta"
// console.log("Type of name (name = 'monu gupta' ) is:",typeof name)
// let age =22;


// console.log(`My name is ${name} and my age is ${age}`);

// anothr way of initializing of string

// 
// const collegeName = new String("Laxmi Narayan College of Technology ")

const collegeName ="Laxmi Narayan College of Technology";
console.log(collegeName)
console.log(typeof collegeName)
console.log(collegeName.length)

// console.log(collegeName.toLocaleLowerCase())
// console.log(collegeName.charAt(2))
// console.log(collegeName.indexOf('C'))

let newString = collegeName.substring(0,5)
console.log(newString)

let anotherString = collegeName.slice(-35,5)
console.log(anotherString)

let names = "   Monu gupta      "
console.log(names)
console.log(names.trim())

let url = "monugupta%36@gmail.com"
let newUrl=url.replace('%36','-')

console.log(newUrl)
console.log(url.includes('gupta'))


console.log(url.split("%"))