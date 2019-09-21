function printReverse(lst) {
    for(i = lst.length - 1; i >= 0; i-=1) {
        console.log(lst[i]);
    }
}

function isUniform(lst) {
    var str = lst[0];
    lst.forEach(function(item){
        if (item !== str) {
            return false;
            // this solution is broken because it only returns
            // false for this level, then once it goes back 1 level
            // it will return true
        }
    });
    return true;
}

// REAL SOLUTION
function isUniform(lst) {
    var str = lst[0];
    for(i = lst.length - 1; i > 0; i--) {
        if (lst[i] !== str) {
            return false;
        }
    }
    return true;
}

function SumArray(lst) {
    var sum = 0;
    lst.forEach(function(num) {
        sum += num;
    })
    return sum;
}

function max(lst) {
    var max = lst[0];
    lst.forEach(function(num) {
        if (num > max) {
            max = num;
        }
    })
    return max;
}

// return a sorted list
function max(lst) {
    var max = lst.sort(function(a, b) {
        return Math.max(a, b);
    })
    return max;
}

// myForEach
Array.prototype.myForEach = function(func) {
    for(i = 0; i < this.length; i++) {
        func(this[i]);
    }
}

// use myForEach
var lst = [3, 4, 5];
lst.myForEach(function printf(item) {
    console.log(item);
})