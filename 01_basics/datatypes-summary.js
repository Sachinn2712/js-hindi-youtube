//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



//*************************************************** */

// Stack(Primitive),  Heap(Non-primitive)


/*
stack me hame ddata ka copy milta and in heap hmme actual data ka Reference milta hai toh jo vi change kret hai in heap it actually gets changed in actual data  */



let myYoutubename ="sachinyadavdotcom"

let anothername = myYoutubename
anothername="chaiaurcode"
console.log(myYoutubename);
console.log(anothername)

let userOne = {
    email: "user@google.com"
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email);


