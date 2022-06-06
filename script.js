//problem 1: factorialize
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

// Problem 2: recursive factorialize
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

// problem 3 : while loop
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

// problem 4: fibonacci

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
// problem 4 :Plus Minus

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

// problem 6 :Mini-Max Sum

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

// problem 7 : Time Conversion

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

// leetcode problem solving

// problem 8 : two-sum

// var twoSum = function (nums, target) {
//     let arrayOfIndex = []
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             let sum = nums[i] + nums[j];
//             if (sum == target) {
//                 arrayOfIndex.push(i);
//                 arrayOfIndex.push(j);
//             }
//         }
//     }
//     return arrayOfIndex;
// };

// let numbers = [2, 11, 7, 15];
// let targets = 9;

// var res = twoSum(numbers, targets);
// console.log(res);

// problem 9 : add two numbers

// var addTwoNumbers = function (l1, l2) {
//     let val1 = 0;
//     let val2 = 0;
//     while (l1 || l2) {
//         if (l1) {
//             val1 = l1.val;
//             l1 = l1.next;
//             console.log(l1)
//         }
//     }
// };

// let firstArray = [2, 4, 3];
// let secondArray = [5, 6, 4];
// let result = addTwoNumbers(firstArray, secondArray);
// console.log(result)

// problem 10 : to camel case

// at first i have to convert the string in to a array
// i have to iterate over the array and check the value that is it a dash/underscore
// if there is a dash/underscore i have to skip that value
// then i have to capitalize the dash/underscore's after value.
// after that i have to return the value

// function toCamelCase(str) {
//   let result = "";
//   let strArray;

//   if (str !== "") {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === "-" || str[i] === "_") {
//           strArray = str.split(str[i]);
//         }
//       }
//   } else {
//       return str;
//   }

//   for (let i = 0; i < strArray.length; i++) {
//     if (i === 0) {
//       result += strArray[i];
//     } else {
//       result += strArray[i].charAt(0).toUpperCase() + strArray[i].slice(1);
//     }
//   }
//   return result;
// }

// console.log(toCamelCase("the-stealth-warrior"));

// problem 11 : closest elevator

// function elevator(left, right, call) {
//     return Math.abs(call - right) > Math.abs(call - left) ? "left" : "right";
// }

// console.log(elevator(0, 2, 1));

// problem 12: Vowel Count

// function getCount(str) {
//   let vowelsCount = 0;

//   // enter your magic here
//   const strArray = str.split("");
//   strArray.forEach((element) => {
//     if (
//       element === "a" ||
//       element === "e" ||
//       element === "i" ||
//       element === "o" ||
//       element === "u"
//     ) {
//       vowelsCount += 1;
//     }
//   });

//   return vowelsCount;
// }

// console.log(getCount("abracadabragi"));

// problem 13 : maskify secure strings

// function maskify(cc) {
//   let newVal = "";
//   const ccArray = cc.split("");
//   ccArray.map((element, index) => {
//     const ind = ccArray.length - 4;
//     index < ind ? (newVal += "#") : (newVal += element);
//   });
//   return newVal;
// }

// console.log(maskify("4556364607935616"));

// problem 14 : Find The Parity Outlier

// function findOutlier(integers) {
//   //your code here
//   const even = [];
//   const odd = [];
//   integers.forEach(element => {
//       element % 2 === 0 ? even.push(element) : odd.push(element);
//   });
//   return even.length === 1 ? even[0] : odd[0];
// }

// console.log(findOutlier([0, 1, 2]));

// Split Strings

// problem 15 : split strings

// function solution(str) {
//   const strArray = str.split("");
//   const newArray = [];

//   if (strArray.length % 2 !== 0) strArray.push("_");
//   if (strArray.length === 0) return strArray;
//   strArray.forEach((element, index) => {
//     if (index % 2 === 0) {
//       newArray.push(element + strArray[index + 1]);
//     }
//   });
//   return newArray;
// }

// function solution(str) {
//   return (str + "_").match(/../g) || [];
// }
// console.log(solution(""));

// Problem 16: RGB To Hex Conversion

// function rgb(r, g, b) {
//   // complete this function
//   const res = [...arguments].map((element) =>
//     element <= 0
//       ? `00`
//       : element >= 255
//       ? `FF`
//       : element < 16
//       ? `0` + element.toString(16).toUpperCase()
//       : element.toString(16).toUpperCase()
//   );

//   return res.reduce((prev, current) => (prev += current));
// }

// console.log(rgb(139, 145, 15));


