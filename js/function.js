// const a = "Hello World!";
// console.log(a);
// // if (true) {
// //     const b = 0;
// // }
// // console.log(sum(1, 2));
// const sumElement = sum(2, 2); // Виклик функції і присвоєння до змінної sumElement
// console.log(sumElement);
// function sum(a, b) { // Оголошення функції
//     const res = a + b;
//     return res;
// }

// const multiPly = function(a, b) { // Не буде працювати якщо звернення до функції буде вище самої функції
//     return a * b;
// }
// console.log(multiPly(2, 6));

// const pvsevdoArts = function() {
//     const array = Array.from(arguments); // Конвертує з псевдомасива до обичного масива
//     console.log(array);

//     console.log(arguments);
//     for (let index = 0; index < arguments.length; index++) {
//         const element = arguments[index];
//         console.log(element);
//     }
// }
// console.log(pvsevdoArts(1, 5, 10, 30, 50));

// const pvsevdoArts = function(...args) {
//     console.log(args);

//     console.log(arguments);
//     for (let index = 0; index < args.length; index++) {
//         const element = args[index];
//         console.log(element);
//     }
// }
// console.log(pvsevdoArts(1, 5, 10, 30, 50));

// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.


// Стрілкові функції

// const printMessage = function (message) {
//   console.log(message);
// };

// const higherOrderFunction = function (callback) {
//   const string = "HOCs are awesome";

//   callback(string);
// };


// higherOrderFunction(printMessage);



// const calculator = (one, two, callback) => { // callback це змінна з якої треба брати функції. Функція зворотнього виклику. Повертає у функцію функцію
//     // console.log(callback);
//     return callback(one, two);
// }
// const plusNum = (a, b) => {
//     return `Сума чисел ${a} + ${b} = ${a + b}`;
// }
// const minusNum = (a, b) => {
//     return `Сума чисел ${a} - ${b} = ${a - b}`;
// }
// const multiPlyNum = (a, b) => {
//     return `Сума чисел ${a} * ${b} = ${a * b}`;
// }
// const devideNum = (a, b) => {
//     return `Сума чисел ${a} / ${b} = ${a / b}`;
// }
// console.log(calculator(10, 5, plusNum));
// console.log(calculator(5, 1, minusNum));
// console.log(calculator(6, 2, multiPlyNum));
// console.log(calculator(60, 3, devideNum));


// Знайдіть суму елементів масиву з використанням колбек-функції
// const arr = [1, 2, 3, 4, 5];

// const sumArray = (array, callback) => {
//     let res = 0;
//     for (const num of array) {
//         res = callback(res, num)
//     }
//     return res;
// }
// const sum = (a, b) => a + b; // calback 
// console.log(sumArray(arr, sum));


// Напишіть функцію, яка повертає новий масив, в якому всі елементи масиву помножені на задане число, з використанням колбек-функції

// const multiPlyArray = (array, number, callback) => {
//     console.log(array);
//     console.log(number);
//     console.log(callback);
//     const result = [];
//     // for (let i = 0; i < array.length; i += 1) {
//     //     result.push(callback(array[i], number));
//     // }
//     for (const elem of array) {
//         result.push(callback(elem, number))
//     }
//     return result;
// }
// const multiPly = (a, b) => a * b;
// const arr = [1, 4, 6, 10, 5];
// const num = 3;
// console.log(multiPlyArray(arr, num, multiPly));
// //                       array,    назва змінної з якої брати функцію
// //                            number


// Створіть функцію processArray(array, callback), яка приймає масив та функцію-колбек. Викличте processArray з різними масивами та функціями-колбеками, щоб виконати наступні операції:
// Порахувати суму всіх елементів масиву.
// Знайти мінімальний елемент масиву.
// Знайти максимальний елемент масиву.
// Перепишіть колбек-функції на стрілки

// const arr = [1, 2, 3, 4, 5];

// const processArray = (array, callback) => {
//     return callback(array);
// }

// const plusNum = (a, b) => {
//     let res = 0;
//     for (let index = 0; index < arr.length; index++) {
//         const element = arr[index];
//         console.log(element);
//         res += element
//     }
//     return res;
// }

// const minNum = (arr) => {
//     let min = 0; // дописати
// }
// console.log(processArray(arr, plusNum));
// console.log(processArray(arr, minNum));
