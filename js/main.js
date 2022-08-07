// Cards info 


tours.forEach(tour => {
	var card = document.querySelector('.cards')
  
	card.innerHTML += `
          <a class="cards__block" id="${tour.id}">
            <img class="cards__img" src="${tour.img}" alt="Фото с экскурсии" />
            <h3 class="cards__title">${tour.title}</h3>
            <p class="cards__place">${tour.place}</p>
            <p class="cards__time">${tour.time}</p>
            <p class="cards__price">от ${tour.price}€ с группы за 1 час</p> 
          </a>
  `
})
