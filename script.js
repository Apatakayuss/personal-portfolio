function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

let click = document.querySelector('.click')
let list = document.querySelector('.list')
// let newDrop = document.querySelector('.newDrop')
seeMore.addEventListener("click", () => {
    drop.classList.toggle('newList');
});

console.log(newDrop);