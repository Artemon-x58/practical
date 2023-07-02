// ЗАДАЧА 1
// ВИКОРИСТОВУЮЧИ API
//ДАНОГО ПОСИЛАННЯ https://pixabay.com/api/docs/ ,
// ТА ЗА ДОПОМОГОЮ fetch , ВИВЕДИ НА ЕКРАН ОТРИМАНИЙ
//РЕЗУЛЬТАТ(ВИКОРИСТАЙ МЕТОД createElement())

// const API_KEY = "38025411-600b4c6c49c6550b6dbadacb0";

// const URL = "https://pixabay.com/api/";

// fetch(`${URL}?key=${API_KEY}&category=sports`)

//     .then(response => response.json())
//     .then(date => imageGen(date.hits))
//     .catch(error => console.log(error))

// function imageDisplay({ webformatURL }) {
//     const img = document.createElement("img");
//     img.src = webformatURL;
//     img.width = 350;
//     imgTwo.appendChild(img);
// };

// function imageGen(obj) {
//     for (const el of obj) {
//         imageDisplay(el);
// }
// }

// const imgTwo = document.querySelector(".img")

//webformatURL
 
// "https://pixabay.com/get/g07a154d69e83f47f976a27a72311fa4749766d380f709036f97f34a813a908b9ba6b1b517abe87325ee20520d5ad70f2a91e6f049d2e44dc5c73491f65d7a1a7_640.jpg"


// ЗАДАЧА 3
// НАПИШІТЬ ПАГІНАЦІЮ, ДЛЯ ПЕРЕХОДУ ПО СТОРІНКАХ
// https://docs.github.com/en/rest/search?apiVersion=2022-11-28#search-user
// //
// fetch(`https://api.github.com/search/users?q=${}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c`)

const refs = {
    root: document.querySelector("#root"),
    form: document.querySelector("#form"),
    cont: document.querySelector(".wrap"),
    inputEl: document.querySelector("#input"),
    btnEl: document.querySelector(".btn")
};

let currentPage = 1;

function getInput (e) {
    e.preventDefault();
    const inputValue = refs.inputEl.value;
    fetch(`https://api.github.com/search/users?q=${inputValue}&client_id=67684cabc84f94f0938e&client_secret=782ea639550c1b5d986bdd8129813652ed04c92c&page=${currentPage}&per_page=1`).then(resolve => resolve.json()).then(data => 
    renderColection(data.items)).then(() => currentPage++).catch(err => console.log(err))
};

refs.form.addEventListener("submit", getInput);

function makeHtml ({avatar_url, login, html_url}) {
    const markup = `<img src="${avatar_url} alt="${login}"><h2>${login}</h2><a href="${html_url}">Link</a>`;
    refs.cont.insertAdjacentHTML("beforeend", markup);
};

function renderColection (elements) {
    elements.forEach(element => 
        makeHtml(element));
};

refs.btnEl.addEventListener("click", getInput)
