'use strict'

/*
 * Create a `multiply` function that takes two number as arguments
 * and returns the result of the multiplication of those two.
 * But you must do this without using the operators * or /
 * and no loops. You need to do it using recursion.
 *
 * @notions Primitive and Operators, Functions, Recursion
 */

// Your code :
/*
function multiply (x, y){
//If the number is less than 0, reject it.
  let i = 0;
  let result = 0;
  if (y < 0) {
      return  y = -y
              x = -x
  }
  // If the number is 0, its factorial is 1.
  else if (x === 0 || y === 0) {
      return 0;
  }
  // Otherwise, call this recursive procedure again.
  else (i < y)
      result = result + x;
      i = i + 1;

}
*/
function multiply(x, y){
let result = 0;
let i = 0;
if (x === 0 || y === 0){
  return 0;
}
if (y < 0){
  return -multiply(x, -y);
}
if (y > 0)
return x + multiply(x, y-1);
}

/*

function factorial(num)
{
    // If the number is less than 0, reject it.
    if (num < 0) {
        return -1;
    }
    // If the number is 0, its factorial is 1.
    else if (num == 0) {
        return 0;
    }
    // Otherwise, call this recursive procedure again.
    else {
        return (num * factorial(num - 1));
    }
}

var result = factorial(8);




function multiply(x, y){
let result = 0;
let i = 0;
if (x === 0 || y === 0){
  return 0;
}
if (y < 0){
  y = -y
  x = -x
}
while (i < y){
  result = result + x;
  i = i + 1}
  return result
}*/
//* Begin of tests
const assert = require('assert')

assert.strictEqual(typeof multiply, 'function')
assert.strictEqual(multiply.length, 2)
assert.strictEqual(multiply.toString().includes('Math.imul'), false)
assert.strictEqual(multiply.toString().includes('while'), false)
assert.strictEqual(multiply.toString().includes('for'), false)
assert.strictEqual(multiply.toString().includes('*'), false)
assert.strictEqual(multiply.toString().includes('/'), false)
assert.strictEqual(multiply(34, 78), 2652)
assert.strictEqual(multiply(123, 0), 0)
assert.strictEqual(multiply(0, -230), 0)
assert.strictEqual(multiply(0, 0), 0)
assert.strictEqual(multiply(123, -22), -2706)
assert.strictEqual(multiply(-22, 123), -2706)
assert.strictEqual(multiply(-22, -123), 2706)
// End of tests */
