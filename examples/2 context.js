/**
 * When a function executes, three things happen to determine what 'this' means.
 * - a stack of scopes is determined
 * - the closest scopes to the runtime of the function are set as the current context
 * - the context is assigned to 'this'. 
 * 
 * To demonstrate
 * 
 * First, a quick function demonstrating what the 'global' variable is, and that it's the 
 * Node version of the Window object (more or less)
 */
function showGlobal() {
  console.log(global, '\n')
}

//showGlobal()


/**
 * This function only prints out whatever 'this' means in it's current context
 * - There are two ways to deal with a function: as a function by itself, or as a 
 *   constructor. Both ways define a different context
 * - the NEW thing is affected by the presence of strict mode. In strict mode, 'this'
 *   then is undefined
 */
function showThis() {
  console.log(this, '\n')
}

//showThis()
//new showThis()


/**
 * Things get more confusing once you execute a method out of it's defined scope. This is best demonstrated in a callback. 
 * In the object below, foo.bar is no longer bound to bar, because it runs in the context of quux
 */
function quux(callback) {
    callback()
}

 //foo.bar(); // 'bar'
 //quux(foo.bar); //global


/**
 * There are a few ways context can be changed, using the keywords 'bind', 'call' or 'apply'
 *  First, 'call' and 'apply'. They are almost identical, except one takes the arguments as an array, and the other one 
 *  takes its arguments separately. Both execute the function immediately
 */

function callApply() {
  foo.bar() // this logs 'foo' as the value of 'this'
  foo.bar.apply() //we're not setting a context in 'apply' here, so 'this' is global
  foo.bar.apply(foo) // explicitely setting foo
  foo.bar.apply(fizz) //now, the value of 'this' actually refers to the object called 'fizz'!   
}

//callApply();

/**
 * 'bind' doens't actually execute the functions, as opposed to 'call' and 'apply'. 
 * It is therefore used more commonly used in callbacks
 */
function bind() {
  quux(foo.bar) // foo.bar is not executed directly, and it still logs 'global'
  quux(foo.bar.bind(foo)) // foo.bar is not executed directly, but we're binding whatever scope we would like to use   
  quux(foo.bar.bind(fizz)) // foo.bar is not executed directly, but we're binding it to fizz
  quux(function () {
    console.log(this)
  }.bind(foo))   // this also binds the anonymous function to foo
}

//bind()