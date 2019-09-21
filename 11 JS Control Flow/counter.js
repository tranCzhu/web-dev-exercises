// 1
var x = -10;
while(x < 19) {
    console.log(x);
    x++;
}
// 2
var y = 10;
while(y < 40) {
    console.log(y);
    y += 2;
}
// 3
var f = 301;
while(f < 333) {
    console.log(f);
    f = f + 2;
}
// 4
var num = 15;
while(num < 50){
    console.log(num);
    num += num;
}

console.log("next method");
var num = 5;
while(num < 50){
    if (num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
    num++;
}