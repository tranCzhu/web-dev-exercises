console.log("Welcome to my fake shop!!");
var fakingIt = require("faker");
for (i = 0; i < 10; i ++) {
    console.log(fakingIt.fake("{{commerce.productName}} - ${{commerce.price}}"));
}