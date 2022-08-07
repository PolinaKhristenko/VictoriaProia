//  Tours info

const tours = [
    {
        id: 1,
        img: "../src/card-1.jpeg",
        title: "Лион и Перуж, знакомство с регионом",
        place: "Лион – Франция",
        time: "4-6 часов",
        price: 50
    },
    {
        id: 2,
        img: "../src/card-2.jpeg",
        title: "Лион от Античности через Темные века к Возрождению",
        place: "Лион – Франция",
        time: "4-6 часов",
        price: 50
    },
    {
        id: 3,
        img: "../src/card-3.jpeg",
        title: "Прогулка в Божоле из Лиона. Пейзажный и самобытный край Божоле",
        place: "Лион → Вильфранш-сюр-Сон → Макон → Лион",
        time: "7 часов",
        price: 40
    },
    {
        id: 4,
        img: "../src/card-4.jpeg",
        title: "Прогулка в Божоле из Лиона",
        place: "Лион → Вильфранш-сюр-Сон → Лион",
        time: "4-8 часов",
        price: 50
    },
    {
        id: 5,
        img: "../src/card-5.jpeg",
        title: "Королевская усыпальница",
        place: "Лион → Бурк-Ан-Брес → Лион",
        time: "2-8 часов",
        price: 50
    },
    {
        id: 6,
        img: "../src/card-6.jpeg",
        title: "Мистический Лион",
        place: "Лион – Франция",
        time: "3 часа",
        price: 50
    },
    {
        id: 7,
        img: "../src/card-7.jpeg",
        title: "С удачным сабражем Вас, Дамы и Господа!",
        place: "Реймс → Эперне → Труа → Реймс",
        time: "1-3 дня",
        price: 40
    },
    {
        id: 8,
        img: "../src/card-8.jpeg",
        title: "Путешествие в регион Долина Роны",
        place: "Лион → Вьенн → Турнон-Сюр-Рон → Лион",
        time: "5-8 часов",
        price: 40
    },
    {
        id: 9,
        img: "../src/card-9.jpeg",
        title: "Бон — винная столица Бургундии",
        place: "Бон – Франция",
        time: "4 часа",
        price: 50
    },
    {
        id: 10,
        img: "../src/card-10.jpeg",
        title: "Винно-гастрономический тур Долина Луары",
        place: "Бурж → Тур → Бурж",
        time: "1-4 дня",
        price: 40
    },
    {
        id: 11,
        img: "../src/card-11.jpeg",
        title: "Винно-гастрономическое путешествие по волшебной Бургундии",
        place: "Бон → Мёрсо → Поммар → Дижон → Макон → Бон",
        time: "7 часов",
        price: 50
    },
    {
        id: 12,
        img: "../src/card-12.jpeg",
        title: "Лион сквозь века",
        place: "Лион – Франция",
        time: "4-7 часов",
        price: 50
    },

]


// Cards info 


tours.forEach(tour => {
	var card = document.querySelector('.cards')
  
    if (card) {
        card.innerHTML += `
        <a href="./tour.html" class="cards__block" id="${tour.id}">
            <div class="cards__img">
                <img src="${tour.img}" alt="Фото с экскурсии" />
            </div>
            <h3 class="cards__title">${tour.title}</h3>
            <p class="cards__place">${tour.place}</p>
            <p class="cards__time">${tour.time}</p>
            <p class="cards__price">от ${tour.price}€ с группы за 1 час</p> 
        </a>
`
    }
})

// let tourId;

// document.querySelector('.cards').addEventListener('click', (e) => {
//     let link = e.target.closest('a');
//     if (!link) return; 
//     tourId = link.id;
// });
      
