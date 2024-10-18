let mySym = Symbol("key1")


let user = {
    name:"Monu",
    "full name":"Kumar Gupta",
    email:"mg@gmail.com",
    age:23,
    address:"Patna",
    isLoggedIn:false,
    [mySym]:"MYkey1"
}

console.log(user.name)
console.log(user.name,user["full name"])
console.log(user.age)
console.log(user[mySym])
console.log(user.email)
user.email = "mg123@google.com"
console.log(user.email)