function pow(x, n) {
  var result = x;

  for (var i = 1; i < n; i++) {
    result = Math.pow(x,n);
  }
  return result;
}

var x = prompt('Укажите число', 1);
var n = prompt('Укажите степень', 1);

console.log('result = ', pow(x, n));
