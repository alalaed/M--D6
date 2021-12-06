/* EXERCISE 11
   Write a function called deleteProp which receives an object and a string as parameters,
   and returns the given object after deleting its property named as the given string.
*/

let object = {
    name: "COCO"
 }
let prop = "DELA"

const deleteProp = function(object , prop){

    console.log(object.name=prop)

}

deleteProp(object,prop)
console.log(object)