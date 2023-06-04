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