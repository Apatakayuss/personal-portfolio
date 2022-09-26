function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

let click = document.querySelector('.click')
let drop = document.querySelector('.drop')
let newDrop = document.querySelector('.newDrop')
seeMore.addEventListener("seeMore", () =>{
    drop.classList.toggle('newDrop');
});

console.log(newDrop);