let prime = 2
const isItPrime = function(){

  if (prime===2|| prime ===3|| prime===5||prime===7){
    console.log("is a prime")
  }
    else if(
        prime%2 !==0 && 
        prime%3 !==0 &&  
        prime%4 !==0 && 
        prime%5 !==0 &&
        prime%6 !==0 &&
        prime%7 !==0 &&
        prime%8 !==0 &&
        prime%9 !==0 
    )
    {
        console.log("is a Prime")
    }
    else console.log("is not a Prime")

}

isItPrime()

