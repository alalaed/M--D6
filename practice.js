/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be pushed to the repository and be available for the tutors by the end of the day (5PM CET)
- Complete as many exercises as you can
*/

// JS Basics

/* EXERCISE A
   Create a variable called test and assign a string value to it.
*/


let test = " "


/* EXERCISE B
    Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.
*/

let sum = 10 + 11 + 12 +13 + 14 + 15 + 16 + 17 + 18 + 19 + 20

/* EXERCISE C
    Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/

let random = Math.floor(Math.random()*20)

/* EXERCISE D
    Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/

const me = {
    name : "Ali",
    surname : "Alaeddine",
    age : 32
}

/* EXERCISE E
    Write a piece of code for programmatically removing the age property from the previously create object.
*/

delete me.age


/* EXERCISE F
   Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.
*/

me.skills = ["html","CSS","JavaScript"]



/* EXERCISE G
   Write a piece of code for programmatically removing the last skill from the skills array inside the me object.
*/

me.skills.pop()
console.log(me)



// JS Functions
/* EXERCISE 1
    Write a function called dice; it should randomize an integer number between 1 and 6.
*/

let randomized
const dice = function (){

    randomized = Math.floor(Math.random()*6)
    return randomized
}

console.log(dice())


/* EXERCISE 2
    Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.
*/

const whoIsBigger = function(n1,n2){
  if( n1 > n2){
      return n1
  } return n2
}

/* EXERCISE 3
    Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.
    Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/

let strive = "I Love Coding 325 I love Coding 567"
const splitMe = function(){
    let result = strive.split(" ")
    return result
}

/* EXERCISE 4
    Write a function called deleteOne which receives a string and a boolean as parameters.
    If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/

//let strive = "I Love Coding"
let j = false
const deleteOne = function(strive,j){

    if( j === true ){
        strive = strive.slice(1,strive.length) 
    } else strive = strive.slice(0, -1)
    console.log(strive)

}

deleteOne(strive,j)



/* EXERCISE 5
   Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs") => returns "I have  dogs"
*/
//let strive = "i love coding 32 hzrje 432 df 4  6 7 8 9 kukug"


const onlyLetters = function(){

    console.log(strive.replace(/\d+/g, " "))
}    
    

console.log(onlyLetters())


/* EXERCISE 6
   Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.
*/

let email = "green@gmail.com"
const isThisAnEmail = function(){

  if(email.includes("@"))
  return true;
  else return "error"
}

/* EXERCISE 7
   Write a function called whatDayIsIt that should return the current day of the week.
*/

/* EXERCISE 8
    Write a function called rollTheDices which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a sum property holding the sum of all values extracted
    and a values array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/

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


/* EXERCISE 9
   Write a function called howManyDays which receives a date as a parameter and returns the number of days passed since that date.
*/

/* EXERCISE 10
   Write a function called isTodayMyBirthday which should return true if today's your birthday, false otherwise.
*/

// JS Arrays & Objects
// NOTE: the movies array used in some exercises is defined at the end of this file

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



/* EXERCISE 12
    Write a function called oldestMovie which finds the oldest movie in the provided movies array.
*/

let oldest = movies[0]

const oldestMovie = function(){
    
    for ( i=0; i<movies.length; i++){
        if (movies[i].Year < oldest.Year){
            oldest = movies[i]
        }
    }console.log(oldest)
}

oldestMovie()


/* EXERCISE 13
    Write a function called countMovies which returns the number of movies contained in the provided movies array.
*/

const countMovies = function(){
  console.log("No. of Movies is : " + movies.length)
}

/* EXERCISE 14
    Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.
*/

let titles = []
const onlyTheTitles = function(){
    for ( i=0; i<movies.length; i++){
        titles.push(movies[i].Title)
    }console.log("the titles are: " + titles)
}
onlyTheTitles()




/* EXERCISE 15
   Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.
*/

let millinial = [ ]
const onlyInThisMillennium = function(){
    for ( i=0; i<movies.length; i++){

        if (movies[i].Year >= "2000"){
            millinial.push(movies[i])
        }
    } console.log(millinial)

}

onlyInThisMillennium()



/* EXERCISE 16 
    Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.
*/

let id = " "
let chosen
const getMovieById = function(id){
    for ( i=0; i<movies.length; i++){

        if (movies[i].imdbID === id){
            chosen = movies[i]
        }
    } console.log(chosen)

}

getMovieById("tt4154796")




/* EXERCISE 17
    Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.
*/


let sum = 0

const sumAllTheYears = function(){
    for ( i=0; i<movies.length; i++){

        sum += +movies[i].Year
    } console.log(sum)

}

sumAllTheYears()




/* EXERCISE 18
    Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.
*/


let title = " "
let chosenTitle = []
let notchosenTitle = []
const searchByTitle = function(title){
    for ( i=0; i<movies.length; i++){

        if ((movies[i].Title).includes(title)){

            chosenTitle.push(movies[i])

        }else notchosenTitle.push(movies[i])

    } console.log(chosenTitle)

}

searchByTitle("Lord")



/* EXERCISE 19
    Write a function called searchAndDivide which receives a string as a parameter and returns an object;
    this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,
    and another array unmatch with all the remaining ones.
*/


let title = " "
let chosenTitle = []
let notchosenTitle = []
const searchByTitle = function(title){
    for ( i=0; i<movies.length; i++){

        if ((movies[i].Title).includes(title)){

            chosenTitle.push(movies[i])

        }else notchosenTitle.push(movies[i])

    } console.log(chosenTitle)

}

searchByTitle("Lord")



/* EXERCISE 20
   Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.
*/

let givenIndex = 1

const removeIndex = function(givenIndex){
  movies.splice(givenIndex-1,1)
  console.log(movies)
}

/* EXERCISE 21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

let star = "*"
let height = 3
let tree = " "

const halfTree = function(){
  for ( i=1;i<=height;i++){
    tree=tree+star
    console.log(tree)
  }  
}



/* EXERCISE 22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

let x = "*"
let space = " "
let h = 4
let tree

for(i=0; i<h; i++){
    x = space + x}
    console.log(x)


    

/* EXERCISE 23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.
*/

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





/* WHEN YOU ARE FINISHED
 Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today's Eduflow.
*/

/* This movies array is used throughout the exercises. You're not supposed to alter it. */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ];