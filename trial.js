

/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/


/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/
let prime = 25
const isItPrime = function(){
    if(
        prime%2 !==0 && prime/2===1 &&
        prime%3 !==0 && prime/3===1 &&
        prime%4 !==0 && prime/4===1 &&
        prime%5 !==0 && prime/5===1 &&
        prime%6 !==0 && prime/6===1 &&
        prime%7 !==0 && prime/7===1 &&
        prime%8 !==0 && prime/8===1 &&
        prime%9 !==0 && prime/9===1 
    )
    {
        console.log("is nt a Prime")
    }
    else console.log("is a Prime")

}

isItPrime()