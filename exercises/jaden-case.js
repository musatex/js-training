'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

 function jadenCase(string) {
     return string.split(" ").map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(" ")

 }

let string = "love live"
return string.split(" ").map(string => string.charAt(0).toUpperCase() + string.slice(1)).join(" ")




//* Begin of tests
const assert = require('assert')

assert.fail('You must write your own tests')
// End of tests *
