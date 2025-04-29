// const a = Number(prompt("Введіть число від 1 до 5: "));
// if (number === 1) {
//     console.log(`1`);
// } else if (number === 2) {
//     console.log(`2`);
// } else if (number === 3) {
//     console.log(`3`);
// } else if (number === 4) {
//     console.log(`4`);
// } else if (number === 5) {
//     console.log(`5`);
// } else if (isNaN(number)) {
//     console.log(`Ви ввели не коректні дані!`);
// } 


// const a = Number(prompt("Введіть число від 1 до 5: "));
// switch (number) { // switch створений на сувору перевірку
//     case 1:
//         console.log(`1`);
//         break;
//     case 2:
//         console.log(`2`);
//         break;
//     case 3:
//         console.log(`3`);
//         break;
//     case 4:
//         console.log(`4`);
//         break; 
//     case 5:
//         console.log(`5`);
//         break;
//     case isNaN(number):
//         console.log(`Ви ввели не коректні дані!`);
//         break;
//     default: // Практично теж саме що і else. Він сам потім робить break;
//         console.log(`Кожний кейс не спрацював`);
// }


// Напиши скрипт вибору готеля по кількості зірок (1 — 20$, 2 — 30$, 3 — 50$, 4 — 70$, 5 — 120$). Якщо в змінній stars щось окрім чисел 1-5, виведи рядок: 'Токої кількості зірок немає'.

// const stars = Number(prompt("Введіть кількість зірок готелю"));
// switch (stars) { 
//     case 1: 
//         alert("Вартість вашого номеру 20$");
//         break; 
//     case 2: 
//         alert("Вартість вашого номеру 30$");
//         break; 
//     case 3: 
//         alert("Вартість вашого номеру 505");
//         break; 
//     case 4: 
//         alert("Вартість вашого номеру 705");
//         break; 
//     case 5: 
//         alert("Вартість вашого номеру 120$");
//         break; 
//     default:
//         alert("Такої кількості зірок немає");
// }

// Напиши скрипт вибору опції доставки товару. Опція зберігається в змінній option: 1 - самовивіз, 2 - кур"єр, 3 - пошта. В змінну message записати повідомлення в залежності від опції:


// let message;

// const option = Number(prompt(""));
// switch (option) {
//     case 1:
//         message = "самовивіз";
//         break
//     case 1:
//         message = "кур`єр";
//         break
//     case 3:
//         message = "пошта";
//         break
    
//         default:
//             message = "Ви ввели число не від 1 до 3";
// }