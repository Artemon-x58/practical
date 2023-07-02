// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API
//ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ
//РЕЗУЛЬТАТ(ВИКОРИСТАЙ МЕТОД createElement())

const API_KEY = "38025411-600b4c6c49c6550b6dbadacb0";

const URL = "https://pixabay.com/api/";

fetch(`${URL}?key=${API_KEY}&category=sports`)

    .then(response => response.json())
    .then(date => imageGen(date.hits))
    .catch(error => console.log(error))

function imageDisplay({ webformatURL }) {
    const img = document.createElement("img");
    img.src = webformatURL;
    img.width = 350;
    imgTwo.appendChild(img);
};

function imageGen(obj) {
    for (const el of obj) {
        imageDisplay(el);
}
}

const imgTwo = document.querySelector(".img")




//webformatURL
 
// "https://pixabay.com/get/g07a154d69e83f47f976a27a72311fa4749766d380f709036f97f34a813a908b9ba6b1b517abe87325ee20520d5ad70f2a91e6f049d2e44dc5c73491f65d7a1a7_640.jpg"