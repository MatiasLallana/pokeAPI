const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

let input = document.querySelector(".input");
let submit = document.querySelector(".submit");
let card = document.querySelector(".card");

const cardTemplate = async (data) => {
  console.log(data.name);
  card.innerHTML = `
  <h2>Nombre: ${data.name}</h2>
  <p> Tipo: ${data.types[0].type.name}</p>
  <p> Peso: ${data.weight / 10}kg</p>
  <p> Altura: ${data.height / 10} metros</p>
  <img src=https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
    data.id
  }.png>
  `;
};

const searchPokemon = async (number) => {
  try {
    const response = await fetch(BASE_URL + number);
    const data = await response.json();
    return data, cardTemplate(data);
  } catch {
    card.innerHTML = `No se encontraron resultados`;
  }
};

const createCard = async (e) => {
  e.preventDefault();
  const searchedNum = input.value;
  await searchPokemon(searchedNum);
};

const init = () => {
  submit.addEventListener("click", createCard);
};

init();
