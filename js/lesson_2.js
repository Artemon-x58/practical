/*ЗАДАЧА 1
БАЗОВІ ОПЕРАЦІЇ З МАСИВОМ
1)створіть масив styles з елементами «Джаз» і «Блюз»
2)добавте «Рок-н-ролл» в кінець
3)замініть значення в середині на «Классика»
4)видаліть перший елемент і виведіть його в консоль
5)вставте «Рэп» і «Регги» на початок масиву

МАСИВ ПО ХОДІ ВИПОВНЕННЯ ОПЕРАЦІЇ
// Джаз, Блюз
// Джаз, Блюз, Рок-н-ролл
// Джаз, Классика, Рок-н-ролл
// Классика, Рок-н-ролл
// Рэп, Регги, Классика, Рок-н-ролл

*/
// const styles = ['Джаз', 'Блюз'];
//     styles.push('Рок-н-ролл');
//     styles.splice(1, 1, 'Классика');
//     //styles[1] = 'Классика';
//     const newStyles = styles.shift();

//     console.log(newStyles);

//     styles.unshift('Рэп', 'Регги');

//     console.log(styles);

//     ЗАДАЧА 2
// Напишіть ф-цію logItems(array) , яка буде получати масив і використовуючи цикл for ,
// який для кожного елемента масива буде виводити в консоль
// повідомлення у форматі <індекс елемента> та <значення елемента>.
// Номерація для кожного елемента масива ['Mango', 'Poly', 'Ajax']
//  з індексом 0 буде виведено 1 - Mango, а для индекса 2 выведет 3 - Ajax.
// const users = ["Mango", "Poly", "Ajax"];
// function logItems(array) {
//   for (let i = 0; i < users.length; i++) {
//     console.log(i, users[i]);
//   }
// }
// logItems();

// ////////////
// ЗАДАЧА 3
// Напишіть код , який шукає саме найменше число в масиві
// 1) напишіть циклом for
// const numbers = [2, 17, 94, 1, 23, 37];
// 2) перепишіть функцією findSmallestNumber(numbers)
// console.log(findSmallestNumber([2, 17, 94, 1, 23, 37]));
//  console.log(findSmallestNumber([49, 4, 83, 7, 12]));

// // const numbers = [2, 17, 94, 1, 23, 37];
// let minNumbers = numbers[0];
// for (let number of numbers) {
// 	if (minNumbers > number){
// 		minNumbers = number;
// 	}
// };
// console.log(minNumbers);

// function findSmallestNumber (numbers){
// return Math.min(...numbers);
// }

// ЗАДАЧА 4
//  Провірте , чи являється рядок полідромом
// const str = "ротатор";//true
// const newString = "Hello";//false

// const newWord = str.split('').reverse().join('');
// console.log(str === newWord);
// ЗАДАЧА 5
// Напишіть ф-цію calculateAverage() яка приймає довільну кількість аргументів і
//  повертає їх середнє значення .Всі аргументи будуть тільки числовими

// console.log(calculateAverage(1, 2, 3, 4)); // 2.5
// console.log(calculateAverage(14, 8, 2)); // 8
// console.log(calculateAverage(27, 43, 2, 8, 36)); // 23.2
// function calculateAverage() {
//   console.log(arguments);
//   const numbers = Array.from(arguments);
//   let total = 0;
//   for (let number of numbers) {
//     total += number;
//   }
//   return total / numbers.length;
// }


////////////////////////
// ЗАДАЧА 6
// Напишіть ф-цію greet(name) , яка при виклику буде получати імя (як приклад , "Василь"), і логінувати рядок "Привіт, <імя>".У випадку , відсутнього 
// відсутнього значення, виводе аргумент "Привіт , гість"
// console.log(greet("Василь"));//Привіт Василь
// console.log(greet());//Привіт гість

// function greet(name = "гість"){
// 	return `Привіт ${name}`
// }

//////////////
// ЗАДАЧА 7
// Виконайте рефакторинг замінивши обявлення ф-ції з function declaration на function expression та на стрілочну функцію
// function checkNumbers(a, b) {
//   if (a > b) {
//     return `число ${a} більше ${b}`;
//   }

//   return `число ${b} більше ${a}`;
// }
// const checkNumbers = function (a,b) {
// 	if (a > b) {
// 		return `число ${a} більше ${b}`;
// 	  }
	
// 	  return `число ${b} більше ${a}`;
// }
// const checkNumbers = (a,b) => {
// 	if (a > b) {
// 		return `число ${a} більше ${b}`;
// 	  }
	
// 	  return `число ${b} більше ${a}`;
// }

// const checkNumbers = (a,b) => a > b ? `число ${a} більше ${b}`: `число ${b} більше ${a}`;
// console.log(checkNumbers(10,30)); 

// ЗАДАЧА 8
// Напишіть ф - цію capitalize, яка буде приймати рядок і буде повертати новий рядок, де кожне слово буде з великої букви

/*
console.log(capitalize('the quick brown fox'))// 'The Quick Brown Fox '

function capitalize(i) { 
    const newI = i.split(' ');
    let str = [];
    for (let word of newI) { 
        let newWord1 = word[0].toUpperCase();
        let newWord2 = word.slice(1);
        let all = `${newWord1}${newWord2}`;
        str.push(all);

    }
    return str.join(' ');
}
*/

//ЗАДАЧА 9
//Напишіть функцію для роботи з колекцією навчаючих курсів courses:

/*
addCourse(name) - добавляє курс у кінець колекції
removeCourse(name) - видаляє курс із колекції
updateCourse(oldName, newName)- змінює імя на нове
*/
//const courses = ["HTML", "CSS", "JavaScript", "React", "PostgreSQL"];

//addCourse("Express"); // ['HTML', 'CSS', 'JavaScript', 'React', 'PostgreSQL', 'Express']
//addCourse("CSS"); // 'У вас уже є такий курс'
//removeCourse("React"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'Express']
//removeCourse("Vue"); // 'Курс з таким іменем не найдено'
//updateCourse("CSS", "NestJS"); // ['HTML', 'CSS', 'JavaScript', 'PostgreSQL', 'NestJS']
//console.log(courses);

/*function addCourse(course) {
    if (courses.includes(course)) {
        console.log('У вас уже є такий курс')
        return;
    }
    return courses.push(course);
}
 */
/*
function removeCourse(course) {
    let index = courses.indexOf(course);
    if (index === -1) {
        console.log('Курс з таким іменем не найдено');
        return;
    }
    courses.splice(index, 1);
}
*/

/*function updateCourse(oldNameCourse, newNameCourse) {
    let oldCourse = courses.indexOf(oldNameCourse);
    courses.splice(oldCourse, 1, newNameCourse);

}
*/

