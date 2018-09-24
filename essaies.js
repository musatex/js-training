function sameSign(x, y){
if (x && y > 0 || x && y < 0)
  return (true)
  if (x && y === 0)
  return (true)
else (false);
}
function sameSign(nb1, nb2) {
  if (nb1 > 0 && nb2 < 0)
    return false;
  if (nb1 < 0 && nb2 < 0)
    return true;
  if (nb1 < 0 && nb2 > 0)
    return false;
  if (nb1 > 0 && nb2 > 0)
    return true;
  if (nb1 == 0 && nb2 == 0)
    return true;
  else {
    return false;
  }
}

function total(i){
(i = 0, i <= total.length; i ++)
console.log(total + total[i]);
}

const test2 = [199, 1234, 2412, 3, 4, 5, 6, 7, 8, 9]
let result = 0
for (let i = 0; i < test2.length; i++) {
    result = result + test2[i]
}
console.log(result)




const add = (a, b) =>
  a + b

  var numbers = [10, 20, 30, 40] // sums to 100
var sum = 0;

for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}


function total (x) {
  for (x = 0; x < total.length; x++) {
    return sum + numbers[x]
  }
}
