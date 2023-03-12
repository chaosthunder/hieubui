const express = require('express');
const app = express();
const port = 3000;

//1. TINH TONG CAC SO CHAN TU 1 DEN 20
let sum1 = 0;

for(let i = 0; i <= 20; i++) {
	sum1 += ((i % 2) == 0) ? i : 0;
}
console.log(`1. TONG SO CHAN TU 1 DEN 20: ${sum1}`);


//2. TINH GIAI THUA CUA 1 SO NGUYEN DUONG BAT KY
let n = 10;
let factorial = 1;
let formatted = "";

for(let i = 1; i <= n; i++) {
	factorial *= i;
}
formatted = factorial.toLocaleString("en-US");
console.log(`2. GIAI THUA CUA SO ${n}: ${formatted}`);


//3. TINH TONG CAC SO NGUYEN TO TU 1 DEN 100
let m = 1;
let max = 100;
let sum2 = 0;

function isPrimeNumber(n) {
    if(n === null || typeof(n) === 'undefined' || isNaN(n)) {
        return false;
    }
    if(n < 2) {
        return false;
    }
    if(n === 2) {
        return true;
    }
    for(let i = 2; i < n; i++) {
        if(n % i === 0) {
            return false;
        }
    }
    return true;
}

for(let j = 1; j <= max; j++) {
    if(isPrimeNumber(j)) {
        sum2 += j;
    }
}
formatted = sum2.toLocaleString("en-US");
console.log(`3. TONG CAC SO NGUYEN TO TU 1 DEN 100: ${formatted}`);

app.listen(port, () => {
   //console.log(`Example app listening on port ${port}`)
})