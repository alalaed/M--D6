
/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/







let random = Math.floor(Math.random()*100)
  


/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

let me = {
    name : "Ali",
    surname : "Alaeddine",
    age : 32
}

delete me.age
me.jordan = [1,2,3,4,5]
//console.log(me)


me.jordan.pop()

console.log(me.jordan)