function isEven(num) {
    return (num % 2 === 0);
}

function factorial(num) {
    for(i = num; i > 1; i -= 1) {
        num = num * (i - 1);
    }
    return num;
}

// or

function factorial(num) {
    var result = 1;
    for (i = 2; i <= num; i++) {
        result = result *= i;
    }
    return result;
}

function kebabToSnake(word) {
    var snake = word.replace(/-/g, "_");
    return snake;
}