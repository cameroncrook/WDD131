export function cattleCard(animal) {
    return `
    <div class="cattle-card">
        <img src="images/${animal.image}" alt="Image of animal ${animal.id}">
        <div class="cattle-card-content">
            <p class="card-title">${animal.id}</p>

            <ul>
                <li><strong>Breed: </strong>${animal.breed}</li>
                <li><strong>Gender: </strong>${animal.gender}</li>
                <li><strong>Birth Date: </strong>${animal.birth}</li>
            </ul>

            <p>Call (307) 880-3352 for offers</p>
        </div>
    </div>
    `;
}

export function breedOption(breed) {
    return `
    <option>${breed}</option>`;
}

export function buildCattleCards (cattle) {
    let html = '';
    cattle.forEach((animal) => {
        html += cattleCard(animal);
    })

    document.querySelector('.animals-display').innerHTML = html;

    return;
}