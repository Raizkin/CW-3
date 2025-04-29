// const message = "I love JavaScript" // Кожна літера починається з 0
// console.log(typeof(message)); 
// const firstIndex = message[0]; // Вивести тільки 0 літеру
// console.log(firstIndex);

// console.log(message.length); // Властивість length вимірує довжину рядка, навіть пробіли. Рахується з 1
// // У властивості нема в кінці ()
// // У метода нема є кінці ()

// const lastIndex = message.length-1; // У кінці length можна плюсовати або мінусовати
// console.log(lastIndex);

// const lastElement = message[message.length-1]; // Властивість lastElement з таким синтаксисом показує лише останню літеру. (тільки пряцює мінус)
// console.log(lastElement);

// const a = 110;
// const b = "5";
// const c = a + b;
// // Якщо number + string то буде додавання рядкіх, якщо number + number то буде сума чисел
// console.log(c);
// console.log(typeof(c));

// const a = 10;
// const b = 23;
// const c = "52";
// const result = a + b + c;
// // Спочатку додалося a + b, а вже потім додався рядок c, тому result це буде string.
// // Якщо у змінній є string, то string завжди перемагає!
// console.log(result);
// console.log(typeof(result));

// const firstName = "Artem";
// const lastName = "Diacok";
// // const result = firstName + " " + lastName; // Це називається зшивання рядків
// // console.log(result);
// console.log(`Мене звати ${firstName} ${lastName}`); // У одному рядку декілька змінн

// const a = "I love JavaScript";
// console.log(a.toLowerCase()); // Метод toLowerCase() робить всі літери до нижнього регістру
// console.log(a.toUpperCase()); // Метод toUpperCase() робить всі літери до верхнього регістру

// const userName = "Artem";
// const message = prompt("Введіть ваше ім'я");
// const result = userName === message;
// console.log(result);


// Задача 1
//1) Створити змінну яка містить рядок з вашим ім'ям.
//2) Створити змінну яка містить рядок з вашим прізвищем.
//3) за допомогою конкатенації зшийте ці змінні у єдиний рядок.
//4) Використати метод length, та вивести у консоль кількість символів у рядку.
//5) Використайте шаблонний рядок, у якому напишіть "Моне звуть" та підставте значення змінної з вашим ім'ям та прізвищем, а потім напишіть "кількість символів у рядку" та підставте змінну з довжиною рядка..
//6) веведіть результат

// const userName = "Artem"; 
// const lastName = "Diachok"; 
// const fullName = `${userName} ${lastName}`; 
// const fullLength = fullName.length;
// console.log(`Мене звуть ${fullName}, кількість символів у рядку "${fullLength}"`);
// // console.log(fullName); 
// // console.log(fullLength);

// console.dir(String);#