const user = new Object()
user.id = "123abc"
user.name="monu"
user.isLoggedIn=false

console.log(user)
console.log(Object.keys(user))//[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(user))//[ '123abc', 'monu', false ]
console.log(Object.entries(user))//[ [ 'id', '123abc' ], [ 'name', 'monu' ], [ 'isLoggedIn', false ] ]
console.log(user.hasOwnProperty('isLoggedIn'));//true

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const regularUser ={
    user:{
        userfullName:{
            firstName:"Monu",
            lastName:"Gupta"
        }
    }
}

// console.log(regularUser.user)
// console.log(regularUser.user.userfullName)
// console.log(regularUser.user.userfullName.firstName)
// console.log(regularUser.user.userfullName.lastName)

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++


let obj1 = {1:"a", 2:"b"}
let obj2 = {3:"c", 4:"d"}
let obj3 = {5:"e", 6:"f"}

let obj4 = {obj1,obj2,obj3}
let obj5 = Object.assign( {}, obj1,obj2,obj3)
console.log(obj4)
console.log(obj5)
