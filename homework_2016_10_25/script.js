//Recursion style
function fac(n) {
    if (n > 1)
        return n * fac(n - 1);
    else
        return 1;
}

function pow(n, m) {
    if (m > 0)
        return n * pow(n, m - 1);
    else
        return 1;
}

function digSum(n) {
    if (n >= 10)
        return digSum((n - n % 10) / 10) + n % 10;
    else
        return n;
}

function sumTo(n) {
    if (n > 1)
        return n + sumTo(n - 1);
    else
        if (n < 0)
            return 'That\'s wrong!';
    else
        return 1;
}

function fib(n) {
    if (n > 1)
        return fib(n - 1) + fib(n - 2);
    else
        return n;
}

//Freestyle
function anotherFac(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}


function anotherPow(n, m) {
    var result = n;
    if (m > 0) {
        for (var i = 1; i < m; i++) {
            result *= n;
        }
        return result;
    }
    else
        if (m < 0) {
            for (var j = -1; j > m; j--) {
                result *= n;
            }
            return 1 / result;
        }
    else
        return 1;
}

function anotherDigSum(n) {
    var arr = String(n).split(''),
        result = 0;
    for (var i = 0; i < arr.length; i++){
        result += parseInt(arr[i]);
    }
    return result;
}

function anotherSumTo(n) {
    var result = 0;
    for (var i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

function anotherFib(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}

console.log('W/ recursion:\n\nFactorial of 7:', fac(7));
console.log('Power(4,4):', pow(4,4));
console.log('Sum of digits 3742', digSum(3742));
console.log('Sum from 1 to 100', sumTo(100));
console.log('#3 of Fibonacci list is:', fib(3));

console.log('\nW/O recursion:\n\nFactorial of 4:', anotherFac(4));
console.log('Power(4,5):', anotherPow(4,5));
console.log('Sum of digits 1919:', anotherDigSum(1919));
console.log('Sum from 1 to 50:', anotherSumTo(50));
console.log('#7 of Fibonacci list is:', anotherFib(7));

var recTime = Date.now();
for (var i = 1; i < 10000; i++) {
    fac(70);
}
recTime = Date.now() - recTime;
console.log('\nTime of 10000 fac(70) calculations w/ recursion: ' + recTime);

var time = Date.now();
for (i = 1; i < 10000; i++) {
    anotherFac(70);
}
time = Date.now() - time;
console.log('Same w/o recursion: ' + time);