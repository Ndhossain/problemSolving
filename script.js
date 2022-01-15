// factorialize
/*function factorialize(num) {
    if (num == 0) {
        return -1;
    } else if (num == 1) {
        return 1;
    } else {
        return (num * factorialize(num - 1));
    }
}

let ans = factorialize(5);
console.log(ans);

// recursive factorialize
function factorialize2(num2) {
    if (num2 === 0 || num2 === 1) {
        return 1;
    }
    for (let i = num2 - 1; i > 1; i--) {
        num2 = num2 * i;
    }
    return num2;
}

let ans2 = factorialize2(5);
console.log(ans2);

// while loop
function factorialize3(num) {
    var result = num;
    if (num === 0 || num === 1) {
        return 1;
    }

    while (num > 1) {
        num--;
        result *= num;
    }
    return result;
}
let ans3 = factorialize3(5);
console.log(ans3);*/

// if (num <= 1) {
//     return 1;
// } else {
//     let seq = fib(num - 1) + fib(num - 2);
//     return seq;
// }


// function fib(num) {
//     let fibo = [0, 1];
//     for (let i = 2; i <= num; i++) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
//     return fibo;
// }

// let result = fib(8);
// console.log(result);

// function fib(num) {
//     let fibo = [0, 1];
//     let i = 2;
//     while (i <= num) {
//         fibo[i] = fibo[i - 1] + fibo[i - 2];
//         i++
//     }
//     return fibo;
// }

// let result = fib(10);
// console.log(result);

// function fib(n) {
//     if(n < 2) {
//         return n;
//     } else {
//          return fib(n - 1) + fib(n - 2);
//     }
// }

// let result = fib(10);
// console.log(result);

// hacker rank problem solving
// problem:Plus Minus

// function plusMinus(arr) {
//     let positive = 0;
//     let negative = 0;
//     let zeros = 0;
//     for (let i = 0; i < arr.length; i++){
//         if (arr[i]>0){
//             positive++;
//         } else if (arr[i]<0){
//             negative++;
//         } else {
//             zeros++;
//         }
//     }
//         let pos = (positive/arr.length).toFixed(6);
//         console.log(pos);
//         let neg = (negative/arr.length).toFixed(6);
//         console.log(neg);
//         let zer = (zeros/arr.length).toFixed(6);
//         console.log(zer);
// }
// let mathArr = [-4, 3, -9, 0, 4, 1];
// let result = plusMinus(mathArr);

// problem:Mini-Max Sum

// function minMax(arr){
//   let max = arr[0];
//   let min = arr[0];
//   let sum = 0;
//   for (let i = 0;i<arr.length;i++){
//     if (max < arr[i]) {
//       max = arr[i];
//     } else if (min > arr[i]){
//       min = arr[i];
//     }
//     sum += arr[i];
//   }
//   let maxSum = sum - min;
//   let minSum = sum - max;
//   console.log(`${maxSum} ${minSum}`)
// }

// let mathArr = [1, 2, 3, 4, 5];
// let result = minMax(mathArr);

// problem:Time Conversion

// function timeConversion(s) {
//     let amPm = s.charAt(8);
//     let militaryTime = '';
//     if (amPm == 'A') {
//         if (s.substring(0, 2) == '12') {
//             militaryTime = '00';
//         } else {
//             militaryTime = s.substring(0, 2);
//         }
//     } else {
//         if (s.substring(0, 2) == '12') {
//             militaryTime = s.substring(0, 2);
//         } else {
//             militaryTime = parseInt(s.substring(0,2)) + 12;
//         }
//     }
//     return militaryTime + s.substring(2, 8);
// }

// let result = timeConversion('07:05:45PM')
// console.log(result);

// let mathArr = [-4, 3, -9, 0, 4, 1];
// function plusMinus(arr) {
//     let plus = 0;
//     let minus = 0;
//     let zeros = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 0) {
//             plus++
//         } else if (arr[i] < 0){
//             minus++
//         } else{
//             zeros++
//         }
//     }
//     let plusSum = (plus/arr.length).toFixed(6);
//     let minusSum = (minus/arr.length).toFixed(6);
//     let zeroSum= (zeros/arr.length).toFixed(6);
//     console.log(`${plusSum}, ${minusSum}, ${zeroSum}`)
// }
// plusMinus(mathArr);

// let mathArr = [1, 2, 3, 4, 5];
// let result = minMax(mathArr);

// function minMax(arr) {
//     let max = arr[0];
//     let min = arr[0];
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (max < arr[i]){
//             max = arr[i];
//         } else if (min > arr[i]){
//             min = arr[i];
//         }
//         sum += arr[i];
//     }
//     let minSum = sum - max;
//     let maxSum = sum - min;
//     console.log(`${maxSum}, ${minSum}`)
// }