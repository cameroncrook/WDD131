import cattle from "./cattle.mjs";
import { cattleCard, breedOption, buildCattleCards } from "./templates.mjs";

function handleFilterSubmit (e) {
    e.preventDefault();

    const gender = document.querySelector('#gender').value;
    const breed = document.querySelector('#breed').value;

    let data = cattle;
    if (gender != 'Any' && breed != 'Any') {
        data = cattle.filter(animal => animal.gender == gender && animal.breed == breed);
    } else if (gender != 'Any') {
        data = cattle.filter(animal => animal.gender == gender);
    } else if (breed != 'Any') {
        data = cattle.filter(animal => animal.breed == breed);
    }

    if (data.length > 0) {
        buildCattleCards(data);
    } else {
        document.querySelector('.animals-display').innerHTML = `
        <p class="result-message">No results found...</p>
        `
    }
    
    return;
} 

function buildBreedOptions (cattle) {
    const breeds = [...new Set(cattle.map(cow => cow.breed))];

    const html = breeds.reduce((acc, breed) => acc += breedOption(breed), "");

    document.querySelector('#breed').innerHTML += html;

    return;
}

document.querySelector('#filters').addEventListener('submit', handleFilterSubmit);

buildCattleCards(cattle);
buildBreedOptions(cattle);