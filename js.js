const menu = document.querySelector('#mobilexx');
const menuLink = document.querySelector('.navmanu');


menu.addEventListener("click", function () {
    menu.classList.toggle("is-active");
    menuLink.classList.toggle("active"); 
})

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () => {
if (window.pageYOffset > 100) {
    toTop.classList.add("active");
}else {
    toTop.classList.remove("active");
}
})
