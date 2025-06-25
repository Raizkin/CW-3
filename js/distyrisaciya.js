// const user = [
//     { name: "Artem", age: 13, city: "Kijv", },
//     { name: "Anton", age: 14, city: "Dnipro", },
//     { name: "David", age: 15, city: "Odessa", },
//     {name: "Olexander", age: 16,},
// ]

// for (const i of user) {
//     const { name, age, city = "Не вказано" } = i;
//     console.log(name);
//     console.log(age);
//     console.log(city);

// }


// Деструктурізація об'єкту
// const a = {
//     name: "Anton",
//     age: 13,
//     city: "asd",
//     password: "qwerty",
//     email: "asdasd@gmail.com",
//     lastName: "asdasd",
    
//     location: {
//         street: "Центр",
//         number: 5,
//         name: "David",
//     },

//     friends: [
//         "Anton",
//         "David",
//         "Oleksandr",
//         "Artem",
//         "Daria",
//         "Timofiy",
//     ]
// }

// const {name, age, city, password, email, lastName, location: {street, number, name: locationName}, friends: [item1, item2, item3, item4, item5, item6]} = a;

// console.log(item6);


// Перший спосіб
// const userName = a.name;
// const userAge = a.age;
// const userCity = a.city;

// console.log(userName);
// console.log(userAge);
// console.log(userCity);

// Другий спосіб
// const {name, age, city, ...asd} = a;
// //      назва ключів               об'єкт
// //                        asd = локальна змінна
// //                     ... = додати у нашому випадку залишок

// console.log(asd);
                                         
// a.lastName = "Hetun";
// const {name, age, city, email, password, lastName = "asdasdasdasd"} = a;
// //                                       задаємо дефолтне значення
// //                                        якщо такого ключа нема
// // console.log(name);
// console.log(userName);

// const user = [
//     {name: "Anton", age: 13, city: "Kiyw",},
//     {name: "Oleksandr", age: 14, city: "Dnipro",},
//     {name: "Artem", age: 15, city: "Odessa",},
//     {name: "David", age: 16,}
//     //                      якщо нема то undefined
// ]

// for (const i of user) {
//     const {name, age, city = "Не вказано"} = i;
//     //               якщо нема то "Не вказано"
//     console.log(name);
//     console.log(age);
//     console.log(city);
// }



// урок 2