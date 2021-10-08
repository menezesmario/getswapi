const getPeopleUrl = id => `https://swapi.dev/api/people/${id}/`

const getPlanetsUrl = id => `https://swapi.dev/api/planets/${id}/`;


const fetchPeopleItem = () => {

    const peoplePromises = []

    for (let i = 1; i <= 10; i++) {
        peoplePromises.push(fetch(getPeopleUrl(i)).then(response => response.json()))
    }

    Promise.all(peoplePromises)
        .then(peopleItems => {
            const listPeople = peopleItems.reduce((accumulator, item) => {
                accumulator += `
                <li class="cardItem">
                <h3>${item.name}</h3>
                <p>Nascimento: ${item.birth_year}</p>
                <p>Gênero: ${item.gender}</p>

                </li>

                `
                return accumulator;
            }, '')

            const empty = ""

            const ul = document.querySelector('[class="people"]')

            ul.innerHTML = listPeople

         

        })

}

const fetchPlanetsItem = () => {

    const planetPromises = []

    for (let i = 1; i <= 10; i++) {
        planetPromises.push(fetch(getPlanetsUrl(i)).then(response => response.json()))
    }

    Promise.all(planetPromises)
        .then(planetItems => {
            const listPlanet = planetItems.reduce((accumulator, item) => {
                accumulator += `
                <li class="cardItem">
                <h3>${item.name}</h3>
                <p>População: ${item.population}</p>
                <p>Terreno: ${item.terrain}</p>

                </li>

                `
                return accumulator;
            }, '')

            const ul = document.querySelector('[class="planet"]')

            ul.innerHTML = listPlanet       

            console.log(listPlanet)

        })

}

fetchPeopleItem() 
fetchPlanetsItem()







































// let myData;
// //let attributes = "";
// let id = "/";

// const attribute = document.querySelector('#menuItem');
// const menuItem = attribute.innerHTML;
// console.log(menuItem);


// showAttributes()

// const API_URL = `https://swapi.dev/api/`


// const showAttributes = attributes => 
//     fetch(`API_URL${attributes}`)
//     .then(function(response) {
//     response.json()
//     .then(function(data) {
//       myData = JSON.stringify(data);
//       console.log(myData)
//     });
//   }).catch(function(err) {
//     console.error('Failed retrieving information', err);
//   });




//   function request(url, name) {
//     fetch(url + name)
//       .then(response => response.json())
//       .then(data => {
//         planet = data;
//       })
//       .catch(err => console.log(err));
//   }


 


//   const PLANETS = JSON.stringify(`${API_URL}planets/1/?format=json`);
//   console.log(`${PLANETS}`) 

