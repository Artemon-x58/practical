import car from './data/car.js';

const carsInUl = document.querySelector('.js-goods');


// ЗАДАЧА 1 
// Створіть карточки товару з масиву використовуючи createElement

const carCardEl = ({ name, img, price, description }) => {
    const liEl = document.createElement('li');
    const nameLiEl = document.createElement('h2');
    nameLiEl.textContent = name;
    const imgEl = document.createElement('img');
    imgEl.src = img;
    imgEl.alt = name;
    imgEl.width = 400;
    const priceEl = document.createElement('p');
    priceEl.textContent = `price: ${price} uan`;
    priceEl.classList.add('car');
    const descEl = document.createElement('p');
    descEl.textContent = description;
    liEl.append(imgEl, nameLiEl, descEl, priceEl);
    return liEl;
}
const carsCardBoxEl = car.map(carCardEl);

carsInUl.append(...carsCardBoxEl);

console.log(carsInUl);





