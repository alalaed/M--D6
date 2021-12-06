
/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/

let email = "green@gmail.com"
const isThisAnEmail = function(){

  if(email.includes("@"))
  return true;
  else return "error"
}



    

console.log(isThisAnEmail())