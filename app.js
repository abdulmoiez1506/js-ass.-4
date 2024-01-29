// Multiplication table of any Number
let j=prompt("Enter the numberr");
var i;

for(i=1; i<=10; i++){
    var a = j*i
    console.log(a)
}

// Factorial of 5!
const num = 5;
var y = 1;
var x = 1;

while(x<=num){

    y = y*x;
    x++;
}
console.log("5! = ",y)