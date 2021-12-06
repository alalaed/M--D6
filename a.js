


let strive = "i love coding 32 hzrje 432 df 4  6 7 8 9 kukug"

const onlyLetters = function(){

    let striveLetters = " "
    for ( i=0; i<strive.length; i++) {

        if(typeof strive[i] !== " number ")
            striveLetters += strive[i]    
    }return striveLetters
}    
    

console.log(onlyLetters())


