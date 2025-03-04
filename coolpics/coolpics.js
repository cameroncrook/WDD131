document.querySelector('.menu-expand').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('hide');
})

document.querySelector('.gallery').addEventListener('click', viewHandler);

function handleResize() {
    const menu = document.querySelector('.menu');
    if (window.innerWidth > 1000) {
        menu.classList.remove('hide');
    } else {
        menu.classList.add('hide');
    }
}

handleResize();
window.addEventListener('resize', handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
    <button class="close-viewer">X</button>
    <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const target = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    const splitSrc = target.src.split('-');

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const imageSrc = splitSrc[0] + '-full.jpeg';

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.querySelector('body').insertAdjacentHTML("afterbegin", viewerTemplate(imageSrc, target.alt))

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector('.close-viewer').addEventListener('click', closeViewer);
}

function closeViewer(event) {
    event.target.parentNode.remove();
}


