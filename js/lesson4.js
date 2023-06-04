// import car from './data/car.js';

// const carsInUl = document.querySelector('.js-goods');


// // ЗАДАЧА 1 
// // Створіть карточки товару з масиву використовуючи createElement

// const carCardEl = ({ name, img, price, description }) => {
//     const liEl = document.createElement('li');
//     const nameLiEl = document.createElement('h2');
//     nameLiEl.textContent = name;
//     const imgEl = document.createElement('img');
//     imgEl.src = img;
//     imgEl.alt = name;
//     imgEl.width = 400;
//     const priceEl = document.createElement('p');
//     priceEl.textContent = `price: ${price} uah`;
//     priceEl.classList.add('car');
//     const descEl = document.createElement('p');
//     descEl.textContent = description;
//     liEl.append(imgEl, nameLiEl, descEl, priceEl);
//     return liEl;
// }
// const carsCardBoxEl = car.map(carCardEl);

// carsInUl.append(...carsCardBoxEl);

// console.log(carsInUl);


// ЗАДАЧА 2
// 2.1НАПИШІТЬ КАЛЬКУЛЯТОР, ЯКИЙ БУДЕ РАХУВАТИ ЦІНУ ШАШЛИКА, В ЗАЛЕЖНОСТІ ВІД ЦІНИ ЗА КІЛОГРАМ І КІЛЬКОСТІ КУПЛЕНОГО ПРОДУКТА , І БУДЕ ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН
// html/

/*
const refs = {
    price:document.querySelector('#price'),
    quantity: document.querySelector('#quantity'),
    text: document.querySelector('.text-right'),
    form: document.querySelector('.form'),
    amount: document.querySelector('.amount'),
    btnCalc: document.querySelector('.btn'),
    cont: document.querySelector('.container'),
}




const calc = (e) => {
e.preventDefault();
const valueQuantity = refs.quantity.value;
const valuePrice = refs.price.value;
    const sum = valuePrice * valueQuantity;

    refs.text.textContent = `${sum.toFixed(2)}`;
    refs.amount.textContent = valueQuantity;
    return sum;
} 

window.addEventListener('DOMContentLoaded', calc);

refs.form.addEventListener('submit', calc);

// 2.2 ПЕРЕПИШІТЬ КОД , ЩОБ ЗНАЧЕННЯ МИ ОТРИМУВАЛИ ПО КЛІЦІ НА КНОПКУ , ПРИ НАЖАТТІ ЯКОГО БУДЕ ВАМ РАХУВАТИ ТА ВИВОДИТИ РЕЗУЛЬТАТ НА ЕКРАН    <button class="btn">Calculate</button>

const quantity = () => {
    const valueQuantity = refs.quantity.value;
    refs.amount.textContent = valueQuantity;
}
 
refs.quantity.addEventListener('input', quantity);


// 2.3 НАПИШІТЬ  РАНДОМНИЙ КОЛІР ДЛЯ НАШОЇ ФОРМИ КОЛЬКУЛЯТОРА ЗА ДОПОМОГОЮ ІНЛАЙНОВОГО СТИЛЮ
const randomRgbColor = () => {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
};

refs.cont.style.backgroundColor = randomRgbColor();
*/

//ЗАДАЧА 3
//3.1 Є МАСИВ, ПОТРІБНО СТВОРИТИ РОЗМІТКУ ІЗ ТИХ КАРТОК 
//(ВИКОРИСТАЙТЕ ШАБЛОННИЙ РЯДОК)
 
 

const instruments = [{
  id: 1,
  img: "https://content.rozetka.com.ua/goods/images/big/13664457.jpg",
  name: "Молоток",
  price: 150
},
{
  id: 2,
  img: "https://machtz.com.ua/files/resized/products/dsc_2898_new.800x550.jpg",
  name: "Перфоратор",
  price: 3000
},{
  id: 3,
  img: "https://content2.rozetka.com.ua/goods/images/big_tile/232653359.jpg",
  name: "Рівень",
  price: 2000
}]

const listEl = document.querySelector('.js-list');

function cardEls() {
    const instrument = instruments.map(({ id, img, name, price}) => {
        return `<li data-id = "${id}">
        <img src = "${img}" alt = "${name}" width = "300">
        <h2>${name}</h2>
        <p>${price}</p>
        </li>`
    }).join(" ")
    listEl.insertAdjacentHTML("beforeend", instrument)
}

cardEls();


//3.2 ДОБАВТЕ КНОПКУ, ЧЕРЕЗ ЯКУ МИ КУПЛЯТИМЕМО ТОВАР

//ЗАДАЧА 4
//ПОТРІБНО СТВОРИТИ Ф-ЦІЮ , ЯКА БУДЕ ШУКАТИ НАРЦИСА.ГОЛОВНА
 //УМОВА НАРЦИСА ЗНАЮТЬ УСІ , НАРЦИС НЕ ЗНАЄ НІКОГО
// є елемент масиву , який незнає нікого
// якщо не одна така людина , то вертаємо not found
// якщо один , то перевірити , чи його знають усі люди, якщо так то вертаємо found

const people1 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
},
{
  name: 'Eva',
  know: ["Alex", "Jhon"],
},
{
  name: 'Jhon',
  know: [],
}]

const people2 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Jhon',
  know: ["Eva"],
},
{
  name: 'Eva',
  know: [],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
}]

const people3 = [{
  name: 'Alex',
  know: ["Eva", "Jhon"],
},
{
  name: 'Jhon',
  know: [],
},
{
  name: 'Eva',
  know: ["Alex", "Jhon"],
},
{
  name: 'Ivan',
  know: ["Jhon", "Alex"],
}]


