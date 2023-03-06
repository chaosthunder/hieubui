const express = require('express');
const app = express();
const port = 3000;

let firstName = "HIEU";
let lastName = "BUI MINH";
/*
let temp = {
    obj1: {
        id: 1,
        name: "TEST BOOK",
        desc: "This is testing for Test book!!!",
        branch: "master",
    },
    obj2:
        id: 2,
        name: "DEMO BOOK",
        desc: "This is testing for Demo book!!!",
        branch: "staging",
    },
    obj3: {
        id: 3,
        name: "LIVE BOOK",
        desc: "This is testing for Live book!!!",
        branch: "live",
    },
};
*/

let name = "Chaos Thunder";
let message = name;

let a = "5000";
let b = "TESTING";
let c = "";
//console.log('a & b before swapping: ' + a + " - " + b);
c = b;
b = a;
a = c;
//console.log('a & b after swapping: ' + a + " - " + b);

let s = 37;
let result = (s * 6 * 2) ** 3;
result = Math.pow(s * 6 * 2, 3);
console.log(result);
console.log("5" ** 2);

let d, e, f = 10;
console.log(d, e, f);

//console.log(message);
//console.log(firstName + " " + lastName + "\r\n");
//console.log(temp);
//console.log("Hello world from A to Z!!!");

app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
})