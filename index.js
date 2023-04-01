const express = require('express');
const app = express();
const port = 3000;

//1. TINH TONG CAC SO CHAN TU 1 DEN 20
// let sum1 = 0;

// for(let i = 0; i <= 20; i++) {
// 	sum1 += ((i % 2) == 0) ? i : 0;
// }
// console.log(`1. TONG SO CHAN TU 1 DEN 20: ${sum1}`);


//2. TINH GIAI THUA CUA 1 SO NGUYEN DUONG BAT KY
// let n = 10;
// let factorial = 1;
// let formatted = "";

// for(let i = 1; i <= n; i++) {
// 	factorial *= i;
// }
// formatted = factorial.toLocaleString("en-US");
// console.log(`2. GIAI THUA CUA SO ${n}: ${formatted}`);

//GIAI THUA BANG DE QUY

//3. TINH TONG CAC SO NGUYEN TO TU 1 DEN 100
// let m = 1;
// let max = 100;
// let sum2 = 0;

// function isPrimeNumber(n) {
//     if(n === null || typeof(n) === 'undefined' || isNaN(n)) {
//         return false;
//     }
//     if(n < 2) {
//         return false;
//     }
//     if(n === 2) {
//         return true;
//     }
//     for(let i = 2; i < n; i++) {
//         if(n % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// for(let j = 1; j <= max; j++) {
//     if(isPrimeNumber(j)) {
//         sum2 += j;
//     }
// }
// formatted = sum2.toLocaleString("en-US");
// console.log(`3. TONG CAC SO NGUYEN TO TU 1 DEN 100: ${formatted}`);

// var temp = 11 * 3;

// console.log((temp % 2 !== 0) ? "So temp la so le!":"So temp la so chan!");
/*
if(temp % 2 === 0) {
    console.log("So temp la so chan!");
}
else {
    console.log("So temp la so le!!!");
}
*/
// let dtb = 8.2;

// if(dtb < 5) {
//     console.log("Xep loai Yeu!");
// }
// else if(dtb >= 5 && dtb < 8) {
//     console.log("Xep loai Kha!");
// }
// else {//dtb > 8
//     console.log("Xep loai Gioi!");
// }

//TIM SO LON NHAT TRONG MANG
function findMax(arr) {

    if(arr === null || typeof(arr) === 'undefined' || !Array.isArray(arr) || Array.isArray(arr) && arr.length === 0)
        return false;

    let max = arr[0];
    let count = arr.length;

    for(var i = 1; i < count; i++) {
        if(max < arr[i])
            max = arr[i];
    }    
    console.log(`PHAN TU LON NHAT CUA MANG LA: ${max}`);
    return max;
}

//TIM TONG CAC SO TRONG MANG
function calcTotal(arr) {

    if(arr === null || typeof(arr) === 'undefined' || !Array.isArray(arr) || Array.isArray(arr) && arr.length === 0)
        return false;

    let total = 0;
    let count = arr.length;

    for(var i = 0; i < count; i++) {
        total += arr[i];
    }
    console.log(`TONG PHAN TU TRONG MANG LA: ${total}`);
    return total;
}

//TIM VI TRI MOT PHAN TU TRONG MANG
function findElement(arr, x) {
    if(arr === null || typeof(arr) === 'undefined' || !Array.isArray(arr) || Array.isArray(arr) && arr.length === 0)
        return false;

    let post = false;
    let count = arr.length;
    for(let i = 0; i < count; i++) {
        if(arr[i] === x) {
            post = i;
            break;
        }
    }
    if(post) {
        console.log(`VI TRI CUA SO ${x} LA ${post}`);
    }
    else {
        console.log(`SO ${x} KHONG TON TAI TRONG MANG`);
    }
    return post;
}

//TINH TRUNG BINH CONG CAC PHAN TU TRONG MANG
function calcAverage(arr) {
    if(arr === null || typeof(arr) === 'undefined' || !Array.isArray(arr))
        return false;

    if(arr.length === 0)
        return false;
    
    let avg = 0;
    let count = arr.length;

    for(let i = 0; i < count; i++) {
        avg += arr[i];
    }

    avg = avg/count;
    console.log(`TRUNG BINH CONG CUA MANG ${arr} LA ${avg}`);
    return avg;
}

//TIM CAC PHAN TU DUY NHAT TRONG MANG
function findUniques(arr) {
    if(arr === null || typeof(arr) === 'undefined' || !Array.isArray(arr))
        return false;

    if(arr.length === 0)
        return false;

    let uniques = [];
    let count = arr.length;

    for(let i = 0; i < count; i++) {
        if(uniques.indexOf(arr[i]) === -1){
            uniques.push(arr[i]);
        }
        else {
            let index = uniques.indexOf(arr[i]);
            uniques.splice(index, 1);
        }
    }

    console.log(`CAC PHAN TU DUY NHAT TRONG MANG ${arr} LA ${uniques}`);
    return uniques;
}

function findDuplicates(arr1, arr2) {
    if(arr1 === null || typeof(arr1) === 'undefined' || !Array.isArray(arr1))
        return false;

    if(arr1.length === 0)
        return false;
    
    if(arr2 === null || typeof(arr2) === 'undefined' || !Array.isArray(arr2))
        return false;

    if(arr2.length === 0)
        return false;
    
    let result = [];
    let count = arr1.length;

    for(let i = 0; i < count; i++) {
        if(arr2.indexOf(arr1[i]) >= 0 && result.indexOf(arr1[i]) < 0) {
            result.push(arr1[i]);
        }
    }

    console.log(`CAC PHAN TU TRUNG NHAU TRONG 2 MANG: ${result}`);

    return result;
}

function sort2DimensionalArr(arr) {

    if(arr === null || typeof(arr) === 'undefined' || !Array.isArray(arr))
        return false;

    if(arr.length === 0)
        return false;

    let col = 0;
    let row = arr.length;
    let result = [];
    let temp = [];

    for(let i = 0; i < row; i++) {
        col = arr[i].length;
        for(let j = 0; j < col; j++) {
            temp.push(arr[i][j]);
        }
    }

    temp = temp.sort((a, b) => a - b);

    for(let i = 0; i < row; i++) {
        result.push(temp.splice(0, col));
    }

    console.log(`MANG 2 CHIEU DUOC SAP XEP LA : ${result}`);

    return result;
}

function calcTotalBorders(arr) {

    if(arr === null || typeof(arr) === 'undefined' || !Array.isArray(arr))
        return false;

    if(arr.length === 0)
        return false;
    
    let row = 0;
    let col = 0;
    let sum = 0;

    row = arr.length;

    for(let i = 0; i < row; i++) {
        col = arr[i].length;
        for(let j = 0; j < col; j++) {
            if(i === 0 || i === row - 1 || j === 0 || j === col - 1) {
                sum += arr[i][j];
            }
        }
    }
    console.log(`TONG CAC PHAN TU NGOAI BIEN CUA MANG LA ${sum}`);
    return sum;
}

function findQueenNumber(arr) {
    let result = [];
    let row = arr.length;
    let col = 0;
    let target = 0;

    for(let i = 0; i < row - 1; i++) {

        col = arr[i].length;

        for(let j = 0; j < col; j++) {
            let maxR = (arr[i][j] > arr[i+1][j]) ? arr[i][j]: arr[i+1][j];
            let maxC = (arr[i][j] > arr[i][j+1] ? arr[i][j]: arr[i][j+1]);
        }
    }

    return result;
}

// let arr = [0, 1, 5, 3, 3, 2];
// let arr2 = [2, 3, 1, 5, 8, 9];
// let arr3 = [
//     [2, 3,  9,  19],
//     [1, 12, 10, 22],
//     [4, 7,  11, 0],
//     [5, 8,  15, 13],
// ];
// let x = 9;
// findMax(arr);
// calcTotal(arr);
// findElement(arr, x);
// calcAverage(arr);
// findUniques(arr);
// findDuplicates(arr, arr2);
// sort2DimensionalArr(arr3);
// calcTotalBorders(arr3);
//findQueenNumber(arr3);

function findFirstLast(str) {
    let result = '';
    result = str[0] + str[str.length - 1];

    return result;
}

function replaceMultiple(str, arr) {
    if(typeof(str) === undefined || str === null || str.length === 0) {
        return false;
    }
    if(typeof(arr) === undefined || arr === null || arr.length === 0) {
        return false;
    }
    let result = [];
    let replacedStr = str;
    for(let i = 0; i < arr.length; i++) {
        replacedStr = replacedStr.replaceAll(arr[i], '$');
    }
    return replacedStr.split('$');
}

function reverseString(str) {
    if(typeof(str) === undefined || str === null || str.length === 0) {
        return false;
    }

    let result = '';
    let arr = replaceMultiple(str, [' ', ':']);
    let count = arr.length;

    for(let i = count - 1; i >= 0; i--) {
        console.log(i);
        result += arr[i] + ' ';
    }
    return result;
}

function searchString(str, key) {
    if(typeof(str) === undefined || str === null || str.length === 0) {
        return false;
    }
    let len = key.length;
    let idx = str.indexOf(key);
    let result = str.substring(idx, idx + len);

    return result;
}

function getStrByLen(arr, len) {
    if(typeof(arr) === undefined || arr === null || arr.length === 0) {
        return false;
    }
    let str = '';

    for(let i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === undefined || arr[i] === null || arr[i].length === 0) {
            return false;
        }
        let tmp = arr[i].length;
        if(tmp >= len) {
            str = arr[i];
            break;
        }
    }
    return str;
}

function countOccurences(str, keyword) {
    if(typeof(str) === undefined || str === null || str.length === 0) {
        return false;
    }
    let arr = str.split(' ');
    let count = 0;

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === keyword) {
            count++;
        }
    }
    return count;
}

function convertSnakeCase(str) {
    if(typeof(str) === undefined || str === null || str.length === 0) {
        return false;
    }

    let tmp = '';
    let count = 0;

    for(let i = 0; i < str.length; i++) {
        let sCase = (str[i] === str[i].toUpperCase());
        if (sCase) {
            tmp += '_' + str[i].toLowerCase();
        }
        else {
            tmp += str[i];
        }
    }
    return tmp;
}

function checkStrSymmetrical(str) {
    if(typeof(str) === undefined || str === null || str.length === 0) {
        return false;
    }
    let len = str.length;
    let pointer1, pointer2, mid = 0;

    if(len % 2 === 0) {//length is even
        mid = Math.floor(str.length / 2);
    }
    else {//length is odd
        mid = Math.floor(str.length / 2) + 1;
    }

    pointer1 = 0;
    pointer2 = mid;

    while(pointer1 < mid && pointer2 < len) {
        if(str[pointer1] === str[pointer2]) {
            pointer1++;
            pointer2++;
        }
        else {
            return false;
        }
    }
    return true;
}

// function fixFilePath(str) {
//     if(typeof(str) === undefined || str === null || str.length === 0) {
//         return false;
//     }
//     let temp = str.split('/');
//     let arr = [];
//     let count = temp.length;

//     for(let i = 0; i < count; i++) {
//         if(temp[i] === '') {
//             continue;
//         }
//         else {
//             arr.push(temp[i]);
//         }
//     }
//     return arr.join('/');
// }

function fixFilePath(str, delimiter) {
    let result = str.split(delimiter);
    let count = result.length;

    for(let i = 0; i < count; i++) {
        if(result[i] === "") {
            result.splice(i, 1);
            if(i > 0) {
                i--;
            }
            else {
                i = -1;
                continue;
            }
        }
        count = result.length;
    }
    return result.join('/');
}

function findLongestStr(str) {

}


// let str = "Hello world! We are learning JS.";
// let str2 = "JS: Toi dang hoc JS nang cao o trung tam Nestech chuyen day ve HTML, CSS, PHP.";
// let idx = str.indexOf('o', 1);
// let idy = str.lastIndexOf('o', 0);
// let ii = str2.indexOf('JS');
// let tmp = str2.slice(ii, ii + 2);
// let str3 = str2.replace(/JS/g, 'JAVA');
// let str4 = str2.toUpperCase();
// let str5 = ' XIN CHAO!  ';
// let str6 = 'DAY LA CHUOI THU NGHIEM';
// let str7 = 'camelCaseStringToConvert';//convert to snake_case
// let str8 = 'chuoidoixung@chuoidoixung';//check if string is symmetrical
let str9 = '/C:///WINDOWS/////System32///drivers///';//wrong computer file's path to fix
// let strArr = ['chuoi chien', 'chuoi nuong moi', 'chuoi luoc', 'chuoi xao', 'chuoi hap', 'kem chuoi', 'che chuoi'];
// let len = 10;
// let keyword = "PHP";
//console.log(`INDEX OF LETTER O: ${idx}\r\n${idy}`);
// console.log(`${str3}`);
// console.log(`${str4}`);
// console.log(`${str.concat(str2)}`);
// console.log(`${(str5.trim()).length}`);
// console.log(`${str6.split(' ')}`);
// console.log(`KY TU DAU VA CUOI: ${findFirstLast(str)}`);
// console.log(`CHUOI DAO NGUOC: ${reverseString(str2)}`);
// console.log(`CHUOI CAN TIM: ${searchString(str2, 'JS')}`);
// console.log(`CHUOI CO DO DAI LON HON ${len}: ${getStrByLen(strArr, len)}`);
// console.log(`SO LAN XUAT HIEN CUA TU KHOA ${keyword}: ${countOccurences(str2, keyword)}`);
// console.log(`CHUOI KET QUA SNAKE CASE: ${convertSnakeCase(str7)}`);
// console.log(`KIEM TRA CHUOI DOI XUNG: ${checkStrSymmetrical(str8)}`);
console.log(`DUONG DAN TAP TIN DUNG: ${fixFilePath(str9, '/')}`);

//OBJECT
function sortNhanVien(arr) {
    if(!Array.isArray(arr) || typeof(arr) === 'undefined' || arr === null) {
        return false;
    }

    for(let i = 0; i < arr.length; i++) {
        let temp = arr[i];
        arr.sort((a, b) => a.tuoi - b.tuoi );
    }
    return arr;
}

// function calcTongLuong(arr) {
//     if(!Array.isArray(arr) || typeof(arr) === 'undefined' || arr === null) {
//         return false;
//     }

//     let sum = 0;

//     for(let i = 0; i < arr.length; i++) {
//         sum += arr[i].luong;
//     }

//     return sum;
// }

function calcTongLuong(arr) {
    let result = arr.reduce((tong, nhanVien) => tong + nhanVien.luong, 0);
    return result.toLocaleString('en-US');
}

let obj = {};
obj.name = 'BUI MINH HIEU';
obj.id = '1326';
obj.age = 27;
let arr = [
    {
        ten: 'HIEU BUI',
        tuoi: 37,
        luong: 23500000
    }, {
        ten: 'KHANH NGUYEN',
        tuoi: 44,
        luong: 19000000
    }, {
        ten: 'TUNG DAO',
        tuoi: 30,
        luong: 21000000
    }, {
        ten: 'TRANG PHAM',
        tuoi: 23,
        luong: 17500000
    }, {
        ten: 'NGAN TRAN',
        tuoi: 19,
        luong: 22000000
    }
];

let time = new Date();

// console.log(`DOI TUONG: ${obj.id}`);
// console.log(`THOI GIAN HIEN TAI: ${time}`);
// console.log(sortNhanVien(arr));
// console.log(`TONG LUONG NHAN VIEN: ${calcTongLuong(arr)}`);

app.listen(port, () => {
   //console.log(`Example app listening on port ${port}`)
})
