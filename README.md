# Scope and the fat arrow function

## To run 

All functions demonstrated at SITBNE are commented and should not need a lot of additional explanation. Please see the files in the 'examples' folder. All actual function calls are commented out, uncomment to run the desired function. 

This package uses node, the easiest way to get going is to clone this repository and run:

`npm install && npm run start`

Saving a file re-runs the script automatically. I left it the way it was presented, so it's ready for you to play with. 

## Train of thought

- UI5 cannot innovate as much as other frameworks because it needs to remain fully backwards compatible
- Design desicions such as the custom module system vs something like webpack or jsm make it harder to 
integrate with other build tools
- WebIDE uses strict linting rules. It'll prevent deployment and enforces style, but it also 
prevents the use of ES6+ features. There are ways around it but they involve a deeper understanding of build tools
to begin with
- Many topics to choose from!
  - Webpack/Babel/ESLint: Modern dev pipeline for increased understanding of the build tools and WebIDE
  - Fat arrow functions
  - Promises and async/await
  - Generator functions
  - Default parameters in functions
  - Template literals, and object literals
  - Destructuring objects and arrays, and the spread operator

## Why the fat arrow then?

The new arrow function is generally considered one of the most useful additions to JavaScript since 2015. It simplifies the concept of scope in a callback, and thanks to the implicit return, it is very useful for functional programming. You'll find introductions and examples for all of these things in the included files