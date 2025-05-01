// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// console.log(friends[0]); // Масив викликається по індексу
// console.log(friends[friends.length-1]); // Значення індекса з кінцьа, від 1 до початку
// friends[0] = "timur" // Так можна замінити значення любого індекса
// console.log(friends);
// console.log(friends.length); // Узнати довжину значення всіх індексів
// console.log(friends[10]); // Якщо значення більше або менше чим всі індекса то буде undefined

// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// friends[friends.length-1] = "timur"; // Замінити останнє значення
// friends[friends.length] = "Timur"; // Додає у кінець
// console.log(friends);

// for (let i = 0; i <= friends.length; i += 1) {
//     // console.log(friends[1]);
//     // console.log(i);
//     console.log(`Порядковий номер ${i + 1} = ${friends[i]}`);
// }

// for (const elem of friends) {
//     console.log(elem); // Вивести всі значення порядково
// }

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (const i of num) {
//     if (i === 7) {
//         continue
//     }
//     console.log(i);
// }

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let max = num[0]
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     // console.log(element);
//     if (max < element) {
//         max = element
//     }
// }
// console.log(max);

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let sum = 0;
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     if (element % 2 === 0) {
//         sum += element;
//     }
// }
// console.log(sum);


// const a = [[1,2,3],[4,5,6], [7,8,9]];
// console.log(a[1][1]);

// for (let i = 0; i < a.length; i += 1) {
//     console.log(a[i]);
    
// }

// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// const findName = "Oleksandr";

// for ( let i = 0; i < friends.length; i += 1) {
//     // console.log(friends[i])


    
//     if (friends[i] === findName) {
//         console.log(`Вашого друга ${friends[i]} знайдено під індексом ${i}`);
//         break
//     }
// }




// 3 урок




// const message = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint rem dolores numquam eaque consectetur explicabo optio itaque maiores ab. Delectus sapiente voluptates nihil quos, illo recusandae ad earum minus iure!";
// const result = message.split(","); // Перетворює рядок у масив по роздільнику (деліметер)
// console.log(result);
// for (const elem of result) { // Перербирає кожний індекс самостійно
//     console.log(elem);
// }

// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// const string = friends.join(", ") // Перетворює масив у рядочок роздільником (деліметер)
// console.log(string);


//Задача

//Робимо slug з назви статті з URL адреси,
// Заголовок статті складається тільки з букв та пропусків,
// Нормалізуємо рядок,
// Розбиваємо по словах,
// Записуємо в рядок з роздільником,
// Чейнінг
// повинно получитися top-10-benefits-of-react-fremework

// const title = "Top 10 Benefits Of React Fremework";
// 1 Варіант
// const result = title.split(" ");
// console.log(result);
// const result2 = result.join("-");
// console.log(result2);
// const result3 = result2.toLowerCase();
// console.log(3);
// 2 Варіант
// const result = title.split(" ").join("-").toLowerCase(); // Чейнінг
// console.log(result);


// const friends = ["Anton", "David", "Oleksandr", "Artem"];
// console.log(friends.indexOf("Anton")); // Повертає індекс знайденого елемента 
// console.log(friends.indexOf("qweqwe")); // Повертає -1 якщо не знайдено входження
// console.log(friends.includes("qwe")); // Повертає true або false якщо рядка не знайдено
// console.log(friends.indexOf("alias") === -1); // Якщо alias нема, то буде true

// for (let i = 0; i < friends.length; i += 1) {
//     const element = friends[i];
//     if (element === "Oleksandr") {
//         console.log("Я знайшовся");
//     }
// }

const friends = ["artem", "anton", "david", "oleksander", "timofii", "yaroslav", "daria", "katya"]
friends.push("Yura","nazar")
friends.pop()
friends.pop()
friends.pop()
friends.pop()
friends.pop()
friends.pop()
friends.pop()
friends.pop()
friends.pop()
friends.unshift("katya","dasha")
friends.shift()
friends.shift()
console.log(friends);
