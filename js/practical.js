// ЗАДАЧА 1
// НАПИШІТЬ РЕЧЕННЯ ЗА ДОПОМОГОЮ ШАБЛОННОГО РЯДКА "ДОБРОГО ДНЯ,МЕНЕ ЗВАТИ ГАЛИНА, МЕНІ 35 РОКІВ, Я ВИВЧАЮ JAVASCRIPT"
// const name = 'ГАЛИНА';
// const age = 35;
// const language = 'JAVASCRIPT';
// const hello = `ДОБРОГО ДНЯ, МЕНЕ ЗВАТИ ${name}, МЕНІ ${age} РОКІВ, Я ВИВЧАЮ ${language}`;
// console.log(hello);


// ЗАДАЧА 2
// ЗАПИТАТИ У КОРИСТУВАЧА ІМЯ, ПОЧТУ , ТЕЛЕФОН, І ПОКАЗАТИ У КОНСОЛІ "КОРИСТУВАЧ __ ВИКОРИСТОВУЄ  __ ПОЧТУ І __ ТЕЛЕФОН"

// const name = prompt('What is your name?');
// const email = prompt('What is your email?');
// const phone = prompt('What is your phone number?');
// const message = `КОРИСТУВАЧ ${name} ВИКОРИСТОВУЄ ПОЧТУ ${email} І ТЕЛЕФОН ${phone} `;
// console.log(message);

// ЗАДАЧА 3
// ПОРАХУЙТЕ СУМУ ТОВАРІВ У КОРЗИНІ . ПОТРІБНО ВВЕСТИ СУМУ 3-Х ТОВАРІВ І ПОРАХУВАТИ ЇХ СУМУ

// const firstware = Number(prompt('Первый товар'));
// const secondware = +prompt('Второй товар');
// const thirdware = Number(prompt('Третий товар'));

// console.log(firstware + secondware + thirdware);

// ЗАДАЧА 4
// ВИКОРИСТОВУЮЧИ КОНСТРУКЦІЮ IF...ELSE , НАПИШИ КОД, ЯКИЙ БУДЕ ЗАПИТУВАТИ:
// "СКІЛЬКИ МІСЯЦІВ МАЄ РІК", ЯКЩО КОРИСТУВАЧ ВВОДИТЬ 12 ТО У КОНСОЛІ ПИШЕ ВІРНО, ЯКЩО НЕ ПРАВИЛЬНО КОРИСТУВАЧ ВВІВ, ТОДІ У КОНСОЛІ ПИШЕ
// "НЕ ЗНАЄТЕ? 12"

// const month = Number(prompt('СКІЛЬКИ МІСЯЦІВ МАЄ РІК?'));
// if (month === 12){
//     console.log('ВІРНО');
   

// }  else {
//     console.log('НЕ ЗНАЄТЕ? 12');
// }ЗАДАЧА 5
// НАПИШІТЬ ПРОГРАМУ, ЯКА ДОЗВОЛЯТИМЕ ЮЗЕРУ ВВОДИТИ ЧИСЛО І ОПРИДІЛЯТИМЕ ЧИ ЦЕ ПАРНЕ ЧИСЛО ,
//  ЧИ НЕ ПАРНЕ.
// const userNumber = Number(prompt('ВВОДИТИ ЧИСЛО?'));
// if (userNumber % 2 === 0) {
//     console.log('Парне');

// } else {
//     console.log('НеПарне');
// }

//ЗАДАЧА 6
//НАПИШІТЬ ПРОГРАМУ , ДЕ МИ У КОРИСТОВАЧА ПИТАЄМОСЬ МІСЯЦЬ НАРОДЖЕННЯ,
// І ПОКАЗУЄМО У ЯКУ ПОРУ РОКУ ВІН НАРОДИВСЯ

// const monthBirth = Number(prompt("В якому місяці ви народилися?"));

// if (monthBirth === 12 || monthBirth === 1 ||monthBirth === 2) {
//     console.log ("Зима");

// }else if (monthBirth >= 3 && monthBirth < 6) {
//     console.log ("Весна");
// } else if (monthBirth >= 6 && monthBirth < 9) {
//     console.log("Літо");
// } else if (monthBirth >= 9 && monthBirth < 12) {
//     console.log("Осінь");

// } else {
//     console.log ("Такого місяця не існує")
// }
 

// ЗАДАЧА 7
// НАПИШІТЬ ПРОГРАМУ, ЯКА ПРОВІРЯЄ ЛОГІН І ПАРОЛЬ,
//  І ВИВОДИТЬ ПРИВІТАННЯ - ЯКЩО ВСЕ ДОБРЕ, АБО ВИДАЄ ПОМИЛКУ ,
//  ЩО НЕ ВІРНИЙ ЛОГІН


// const login = prompt(`введи логін`);
// const password = prompt('введи пароль');
// const loginAdmin = "room";
// const passwordAdmin = "four";
// // if (loginAdmin === login && passwordAdmin === password){
// // 	console.log("вірний");

// // } else {
// // 	console.log("Невірно");
// // }

// const loginAd = loginAdmin === login && passwordAdmin === password ? "вірний" : "Невірно";
// console.log(loginAd);

// НАПИШІТЬ ПРОГРАМУ , ЯКА БУДЕ ЗАПИТУВАТИ У КОРИСТУВАЧА ПЕРІОД ПІДПИСКИ НА СЕРВІС ТА ПОКАЗУВАТИМЕ ЦІНУ ПІДПИСКИ(ВИКОРИСТАЙ IF..ELSE, ТА ПЕРЕПИШИ НА SWITCH)
// ЯКЩО ДЕНЬ - ціна 1.99
// ЯУЩО НЕДІЛЯ - ціна 5.99
// ЯКЩО МІСЯЦЬ - ціна 10.99
// ЯКЩО РІК - ціна 100.99

const period = prompt('ПЕРІОД ПІДПИСКИ НА СЕРВІС');
const UpPeriod = period.toUpperCase();
// if (UpPeriod === 'ДЕНЬ') {
//     console.log('ціна 1.99')
// } else if (UpPeriod === 'НЕДІЛЯ') {
//     console.log('ціна 5.99')
// } else if (UpPeriod === 'МІСЯЦЬ') {
//     console.log('ціна 10.99')
// } else if (UpPeriod === 'РІК') {
//     console.log('ціна 100.99')
// } else { 
//     console.log('такого периода нема')
// }

switch (UpPeriod) {
    case 'ДЕНЬ':
        console.log('ціна 1.99')
        break;

case 'НЕДІЛЯ':
    console.log('ціна 5.99')
    break;

case 'МІСЯЦЬ':
    console.log('ціна 10.99')
    break;

case 'РІК':
    console.log('ціна 100.99')
        break;
    default:
        console.log('такого периода нема')
         break;        
}