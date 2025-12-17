let navToogleButton = document.querySelector("#menu-icon");
let navBar = document.querySelector(".navbar");
let options = document.querySelector(".nav-links");
let flag = 0;
function showNav(e) {
    if (flag === 0) {
        flag = 1;
        options.style.display = "flex";
        navBar.style.height = "50vh";
        navToogleButton.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
    } else {
        flag = 0;
        options.style.display = "none";
        navBar.style.height = "10vh";
        navToogleButton.innerHTML = `<i class="fa-solid fa-bars"></i>`;
    }
}
navToogleButton.addEventListener('click', showNav);

let typed = new Typed(".repeat-text", {
    strings: ["Web Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
});