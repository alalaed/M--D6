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
let tree = " * "

const halfTree = function(){
  for ( i=1;i<=height;i++){
    tree=tree+star
    console.log(tree)
  }  
}

//halfTree()


const fullTree = function(){
    console.log(tree)
    for ( i=1;i<=height;i++){
        tree=star+tree+star
        console.log(tree)
    }
}

fullTree()