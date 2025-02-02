document.querySelector('.menu-expand').addEventListener('click', () => {
    document.querySelector('.menu').classList.toggle('hide');
})

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
