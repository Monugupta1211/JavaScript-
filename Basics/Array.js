let myArr = [1,2,3,4,5,6]
let myHero =["Devgan", "Amitabh Bachan", "Sunny Deol", "Akshay"]

//console.log(myArr[0])


// let myArr2 = new Array(7,8,9,10,11,12)

// Array Methods

// myArr2.push(15)
// myArr2.push(21)

// let myArr2 = new Array(7,8,9,10,11,12)
// myArr2.pop()
// console.log(myArr2) //  [ 7, 8, 9, 10, 11 ]

// let arr = [ 7, 8, 9, 10, 11 ]
// arr.unshift(6)
// console.log(arr)//[ 6, 7, 8, 9, 10, 11 ]

// let arr = [ 6, 7, 8, 9, 10, 11 ]
// arr.shift()
// console.log(arr)  //  [ 7, 8, 9, 10, 11 ]


/************************************************** */
// let arr = [ 6,7, 8, 9, 10, 11 ]
// console.log(arr.includes(9))//true
// console.log(arr.includes(5))//false
// console.log(arr.indexOf(8))//10

//************************************************ */
// let arr = [ 7, 8, 9, 10, 11 ]
// let newArr = arr.join()
// console.log(newArr)// 7,8,9,10,11
// console.log(typeof newArr)// String

/************************************************** */
// slice(firstindex,lastIndex)  , splice()

// let arr = [ 7, 8, 9, 10, 11 ]
// console.log("A ",arr)
// let myarr1 = arr.slice(1,3)
// console.log(myarr1)

//splice(S_index,delete,add)
// S_index:- starting index,from where elements are add
// delete:- Number of elements we want to delete
// add:-    write values we want to add elements 
let arr = [ 7, 8, 9, 10,11,12,13,14,15]
console.log("B ",arr)

let myarr2 = arr.splice(1,4,90,91,92,93)
console.log(arr)
console.log("C ",myarr2)

