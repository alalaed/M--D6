
/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }*/

    
    let randomized
const dice = function (){

    randomized = Math.floor(Math.random()*6)
    return randomized
}


let values = []
let sum = 0
const rollTheDices = function(n){
    
    for (i=0; i<n; i++){
        values.push(dice())
    }console.log("values: " + values)

    for (i=0; i<values.length; i++){
        sum = sum + values[i]
    } console.log("sum: " + sum)
}

rollTheDices(3)
