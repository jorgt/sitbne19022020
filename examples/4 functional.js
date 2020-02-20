const fs = require('fs');
/**
 * Functional programming 
 * - it's a method of programming that consists mostly around executing many small functions
 * - these functions are meant to be PURE, where the input of each is considered IMMUTABLE
 * - this means in practice, data is created and destroyed INSTEAD OF changed
 * - this also means in functional programming you'll avoid statements like:
 *     'loop', 'for .. in', 'while', 
 *      'array.push' and other array manipulators, 
 *      the keywords VAR and LET
 *
 * A demonstration using FILTER, MAP and REDUCE
 * 
 * MAP is an array function that can be used to manipulate the current elements in the array. 
 * It takes as argument the current array element, applies the function to every element 
 * and creates a new array as the result
 *
 * Fat arrows second useful characteristic is the implicit return. When ommiting the brackets, the fat arrow function
 * will return whatever your statement returns without you explicitly mentioning the return.
 */


const myArray = [1, 2, 3, 4]; // the array we're using
const doubleIt = value => value * 2 // the function we're applying to each array element
const doubleArray = myArray.map(doubleIt); // the new array

// console.log(doubleIt(3))
// console.log(myArray) //input is unchanged!
// console.log(doubleArray) //double it returned a NEW array 


/**
 * These are equivalent, but the implicit return makes for a very readable line
 */

const doubleItOnce = [1, 2, 3, 4].map(value => value * 2);

const doubleItAgain = [1, 2, 3, 4].map(value => {
  return value * 2;
});

const doubleItOnceMore = [1, 2, 3, 4].map(function (value) {
  return value * 2;
});

// console.log(doubleItOnce);
// console.log(doubleItAgain);
// console.log(doubleItOnceMore);



/**
 * FILTER is a method that walks over the array and returns a new, possibly shorter array based on 
 * the TRUEthy or FALSEy result of the check you're doing
 */

const myResult = myArray
  .map(value => value * 2)
  .filter(value => value > 5)

//console.log(myResult)




/** 
 * REDUCE is probably the most powerful array function there is, since it can do most things the other functions 
 * can do. Use it somewhat sparingly, because you'll end up with spagethi again. 
 * 
 * It's coolest feature is that it can be used to turn an array into a different data type
 * 
 * it takes a function with an ACCUMULATOR, and the CURRENT ELEMENT the function is assessing as parameters. 
 * REDUCE takes a second parameter, which is the object we'll be kicking the accumulator off with. 
 */

 /**
  * This is a sum
  */

const sumFunction = (sumValue, currentValue) => {
  sumValue += currentValue;
  return sumValue
}

const mySum = myArray
  .map(value => value * 2)
  .filter(value => value > 5)
  .reduce(sumFunction, 0) // start our sum at 0. If you want to start counting at 10, this is where you'd set that initial value

// console.log(mySum)

 /**
  * This is a way to turn an array into an object
  */
const objFunction = (newObj, currentValue) => {
  newObj[`MyVal${currentValue}`] = currentValue;
  return newObj
}

const myObject = myArray
  .map(value => value * 2)
  .filter(value => value > 5)
  .reduce(objFunction, {}) // our initial value is an empty object, so the reduce function's accumulator is an object

//console.log(myObject)







/**
 * These concepts become more powerfull when applied to real world data, which very often
 * consists of arrays with objects in them. 
 * 
 * Consider the following example:
 */
const splitLineAtComma = line => line.split(',');
const filterEmptyLine = line => line.length === 2;
const convertDollarToFloat = line => {
  line[1] = parseFloat(line[1].replace('$', ''))  // this is an assignment, not an operator! 
                                                  // therefore, no explicit return!
  return line;
};

const totalValuePerProduct = (productList, line) => {
  const [product, value] = line; // Did you notice? Array deconstructing!

  productList[product] = productList[product] || 0;   //A common way of defaulting a variable
  productList[product] += value;

  return productList
}

function fileExample() {

  const myFile = fs.readFileSync('./products.csv', 'utf8')
    .split('\n') //not an array function, splits the file at the new-line character
    .map(splitLineAtComma)
    .filter(filterEmptyLine)
    .map(convertDollarToFloat)
    .reduce(totalValuePerProduct, {})


  console.log(myFile);  
}

//fileExample()