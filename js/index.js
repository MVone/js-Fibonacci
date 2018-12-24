let a = [1, 1];
const n = parseInt(prompt('Enter N'), 10);
document.write('we are calculating ' + n + ' member of Fibonacci number sequence' + '<br>' + '<br>');

var i;
if (n===0) {
  document.write('result using cycle is 0' + '<br>');
} else {
      if ((n===1) || (n===2)) {
        document.write('result using cycle is 1' + '<br>');
        } else {
             for (i=2; i<n; i++) {
                a[i]=a[i-1] + a[i-2];
               }
             document.write('result using cycle For is ' + a[n-1] + '<br>');
              }
      }

document.write('result using Recursively function is ' + fibonacci(n) + '<br>');
document.write('result using formula Bine is ' + bine(n) + '<br>');

function fibonacci(k) { //Recursively
  var num;
  
  if (k >= 2) {
    num = fibonacci(k - 1) + fibonacci(k - 2);
  } else {
    num = k;
  }

  return num;
}


function bine(k) {
  var sq5 = Math.sqrt(5);
  var a = (1 + sq5) / 2;
  var b = (1 - sq5) / 2;
  return (Math.pow(a, k) - Math.pow(b, k)) / sq5;
}
