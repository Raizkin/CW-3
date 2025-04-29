const name = "David";
// console.log(name[0]); // Значення по індексу
// const number = 100;
// for (let i = 0; i <= number; i += 1) {
//     console.log(i);
// }

// // let i = 0; Локальна змінна i, = 0 з якого індекса починаешь перебирати.
// // i < 10 // Умову до куди ми перебираємо наш цикл
// // i += 1 // На кожній ітерації додати лічільника 1


// const nameJs = "JavaScript";
// for (let i = 0; i < nameJs.length; i += 1) {
//     // console.log(name[i]);
//     console.log(`Індекс елемента ${i}, а значення цього індекса ${nameJs[i]}`);
// }

// for (let index = 0; index < 20; index += 1) {
//     // console.log(index);
//     if (index === 7) {
//         console.log(index);
//         continue; // Пропустити
//         // break; // Припинити
//     }
//     // console.log(index);
// }

// for (let i = 0; i <= 10; i += 1) {
//     console.log(`Таблиця множення числа ${8} x ${i} = ${8 * i}`);
// }

// // Сума чисел від 1 до 100:
// let sum = 0;
// for (let i = 0; i <= 100; i += 1) {
//     sum += i;
// }
// console.log(sum);

// for (let i = 10; i >= 1; i -= 1) {
//     console.log(i);
// }

// const fullName ="Artem Diachok";
// for (let i = 0; i < fullName.length; i +=1) {
//     console.log(fullName[i]);  
// }

// let sumTwo = 0;
// for (let i = 0; i < 50; i += 0) {
//     if (sumTwo % 2 === 0) {

//     }
// }



// const number = 10;
// for (let i = 0; i <= number; i += 1) {
//     console.log(i);
// }

// let i = 10;
// while (i >= 1) {
//     console.log(i);
//     i -= 1
// }

// let sum = 0;
// for (let i = 0; i <= 10; i += 1) {
//     sum += i
// }
// console.log(sum);

// let i = 0;
// let sum = 0;
// while (i <= 10) {
//     sum += i
//     i += 1;
// }
// console.log(sum);

// let num = 0;
// do { // Те шо лежить у do воно завжди виконається, навіть якщо false
//     num = Number(prompt("Введіть число більше 10"));
// } while (num < 9)
//     console.log(num);


// попросити у користувача ввести номер телефону і якщо довжина номеру телефону менша, або більша за 10, обробити помилки

// let phone;
// do {
//     phone = prompt("Ввеліть номер телефону");
//     if (phone === null) {
//         alert("Скасовано");
//         break;
//     }
//     if (phone.length === 10 && !isNaN(phone)) {
//         alert("Номер телефону прийнято");
//         break;
//     } else {
//         alert("Введіть коректний номер телефону!!!")
//     }
// } while(true);
//     console.log(phone);


//Напиши скрипт, який імітує авторизацію адміністратора в панелі управління. Є змінна message в яку буде записано повідомлення про результат. При завантаженні сторінки у відвідувача запитується пароль через prompt:
// let message = "";
// const ADMIN_PASSWORD = "qwerty";
// const password = prompt("Введіть пароль адміністратора: ");
// Якщо натиснули Cancel, записати в message рядок 'Скасовано користувачем!'
// if (password === null) {
//     message = "Скасовано користувачем!";
    // В іншому випадку, якщо введений пароль який збігається зі значенням константи ADMIN_PASSWORD, записати в message рядок 'Ласкаво просимо!'
// } else if (password === ADMIN_PASSWORD) { 
//     message = "Ласкаво просимо!";
    // В іншому випадку, тобто якщо жодна з попередніх умов не виконалася, записати в message рядок 'Доступ заборонений, невірний пароль!'    
// } else {
//     message = "Доступ заборонений, невірний пароль!";
// }
// Після всіх перевірок вивести в alert значення змінної message.
// alert(message);