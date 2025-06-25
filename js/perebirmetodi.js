

// const arr = [1,3,5,7,9]

// let total = [];
// for (const item of arr) {
//     total += item
// }

// const result2 = arr.reduce((acc, item)=> acc + item,0)
// console.log(result2);


// порахувати суму усіх елементів
// const numbers = [2, 5, 6, 8, 80, 40];


// const result = numbers.reduce((acc, item) => acc + item, 0)
//  console.log(result);
 


// const students = [
//     { name: "Anna", age: 20, gender: "female", grade: 85 },
//     { name: "Ivan", age: 22, gender: "male", grade: 90 },
//     { name: "Olena", age: 19, gender: "female", grade: 78 },
//     { name: "Petro", age: 21, gender: "male", grade: 92 },
//   ];
  
// порахувати загальну кількість балів
  

// const result = students.reduce((acc, item) => acc + item.grade, 0)
// console.log(result);



//порахувати загальну зарплату
// const salary = {
//     mango: 30,
//     poly: 40,
//     ajax: 50,
// }
  

// const result = Object.values(salary).reduce((acc, item) => acc + item, 0)
// console.log(result);



//рахуємо загальну вартість товарів в корзині

// const cart = [
//     { label: "apple", price: 100, quantity: 2, },
//     { label: "banana", price: 70, quantity: 3, },
//     { label: "lemons", price: 50, quantity: 5, },
//   ];
  

// const result = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
// console.log(result);


// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];


//отримати масив усіх tags

// const result = tweets.reduce((acc, item) => {
//     acc.push(...item.tags)
//     return acc
// }, [])

// console.log(result);



// const res = tweets.flatMap((item,) => item.tags)
// console.log(res);
