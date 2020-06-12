console.log("JavaScript loaded");

const searchParams = new URLSearchParams(window.location.search)
const searchName = searchParams.get('search')

const baseURL = "http://localhost:3000";
let dogsURL = `${baseURL}/dogs`;

if (searchName) {
  dogsURL = `${dogsURL}?search=${searchName}`
}

const dogsSection = document.querySelector("section");

fetch(dogsURL)
  .then(parseJSON)
  .then(displayDogs);

function displayDogs(dogs) {
  dogs.forEach(showDog);
}

function showDog(dog) {
  const $dogCard = document.createElement("div");
  console.log(removeDog)
  $dogCard.append(cardTitle(dog), cardAge(dog), removeDog(dog));
  dogsSection.append($dogCard);
}

function cardTitle(dog) {
  const $name = document.createElement("h2");
  $name.innerHTML = 
    `<a href="/dogShow.html?dogId=${dog.id}">${dog.name}<a/>`;
  return $name
}

function cardAge(dog) {
  const $age = document.createElement("p");
  $age.textContent = `${dog.age} years old`;
  return $age 
}

function removeDog(dog) {
  const $remove = document.createElement('form')
  $remove.method = 'POST'
  $remove.action = `http://localhost:3000/dogs/${dog.id}`
  $remove.id = 'delete'
  $remove.innerHTML =
    `
      <input type="hidden" name="_method" value="DELETE" />
      <input type="submit" value="Remove Cat Infiltrator!"/>
    `
  return $remove
}

function parseJSON(response) {
  return response.json();
}