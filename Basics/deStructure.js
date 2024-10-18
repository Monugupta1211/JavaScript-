const course = {
    courseName: "js in hindi",
    price: "500",
    courseInstructor: "Prateek Mishra"
}

// course.price

const {courseInstructor} = course
const {courseInstructor:instructor} =course 
console.log(courseInstructor)// prateek Mishara
console.log(instructor)//pratek Mishra
