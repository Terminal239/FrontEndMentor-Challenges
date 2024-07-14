const headerNavBar = document.querySelector(".header__navigation");
const btnToggleNavigation = document.querySelector(".btn--toggle");

btnToggleNavigation.addEventListener("click", function (event) {
    headerNavBar.classList.toggle("reveal-nav");
    btnToggleNavigation.querySelector(".icon-nav-open").classList.toggle("hidden");
    btnToggleNavigation.querySelector(".icon-nav-close").classList.toggle("hidden");
});
