import recipes from "./recipes.mjs";

function random(num) {
    return Math.floor(Math.random()*num);
}

function getRandomListEntry(list) {
    const listLength = list.length;
    const randomIndex = random(listLength);

    return list[randomIndex];
}

function recipeTemplate(recipe) {
    return `
    <article class="recipe">
        <img class="recipe-image" src="${recipe.image}" alt="${recipe.name} Image" width="100" />
        
        <div class="recipe-info">
            <div class="recipe-tags">
                ${tagsTemplate(recipe.tags)}
            </div>

            <a class="recipe-name" href="${recipe.url}"><h2>${recipe.name}</h2></a>
            ${ratingTemplate(recipe.rating)}

            <p class="recipe-description">${recipe.description}</p>
        </div>
    </article>
    `;
}

function tagsTemplate(tags) {
    let html = '';

    tags.forEach((tag) => {
        html += `<p>${tag}</p>`
    })

    return html;
}

function ratingTemplate(rating) {
    let html = `
    <span
        class="rating"
        role="img"
        aria-label="Rating: ${rating} out of 5 stars"
    >`;

    for (let i=1; i <= 5; i++) {
        if (rating >= i ) {
            html += '<span aria-hidden="true" class="icon-star">⭐</span>';
        } else {
            html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
        }
    }

    html += '</span>';

    return html;
}

function renderRecipes(recipeList) {
    const recipeDisplay = document.querySelector('.recipe-display');

    let html = '';
    recipeList.forEach((recipe) => {
        html += recipeTemplate(recipe);
    })

    recipeDisplay.innerHTML = html;
}

function init() {
    const recipe = getRandomListEntry(recipes);

    renderRecipes([recipe]);
}
init();

function filterRecipes(query) {
    const filtered = recipes.filter((recipe) => recipe.name.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query) || recipe.tags.find((item) => item.toLowerCase().includes(query)));
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
}

function searchHandler(e) {
    e.preventDefault();

    const searchString = document.getElementById('search-string').value.toLowerCase();

    const searchResults = filterRecipes(searchString);
    renderRecipes(searchResults);

    return;
}

document.querySelector('.search-bar').addEventListener('submit', searchHandler);