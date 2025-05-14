// array

const myAr=[0,1,2,3,4,5]

console.log(myAr[0]);

//myAr.push(6)
//console.log(myAr)
//myAr.pop()

//myAr.unshift(9)
//myAr.shift()
//console.log(myAr)

//slice -> slices the array elements with not including the end element
//splice -> removes the portion of elements from the main arrat element
 
//concat -> joins one array with the other
//...Array Name-> spreads out function (its function is also to join the arrays)

const ar=[1,2,3,[4,5]]
const arr=ar.flat(Infinity)
//console.log(arr)

console.log(Array.isArray("Gopal"))
console.log(Array.from("Gopal"))

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
