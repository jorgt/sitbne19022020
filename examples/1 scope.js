
/**
 * A demonstration on block scope, and the two new keywords CONST and LET that can be used 
 * in addition to VAR. 
 * - shows global scope
 * - shows local scope
 * - shows how VAR is not affected by lower level block scope, but LET and CONST are (HOISTING!)
 */
function scope() {
  var likes = 'abap'; // local scope # 1

  if(true) { // local scope # 2
    var food = 'pizza'
    let drinks = 'beer'
    const place = '99 creek st'

    //place = 'sap office' //error, assignment to a constant variable

    likes = 'javascript'
  }

  console.log(likes) //Javascript
  console.log(food) //Pizza
  //console.log(drinks) //error, drinks = undefined
  //console.log(place) //error, place = undefined
}

//scope();





/**
 * Lexical scope - variables declared in higher level scope are 
 * available to lower level functions. 
 * The concept of splitting and chaining functions in their simplest form is called currying
 */
var name = 'Jorg' // global scope

function greet(greeting) {
  return function (you) {
    console.log(`${greeting} ${you} and ${name}`); // template literal
  }
}

// const hiGreeter = greet('Hi'); //creates a new greeter for 'Hi'
// hiGreeter('Tim'); // logs 'Hi Tim and Jorg'
