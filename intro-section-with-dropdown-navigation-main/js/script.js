const navigation = document.querySelector(".container--navigation");
const btnMenu = document.querySelector(".btn--menu");
const body = document.querySelector("body");
const navigationItems = document.querySelectorAll(".header-nav__item");
const dropdowns = document.querySelectorAll(".dropdown");
const overlay = document.createElement("div");
overlay.classList.add("overlay");

overlay.addEventListener("click", closeNavigation);

btnMenu.addEventListener("click", toggleNavigation);

navigationItems.forEach((item) => {
    item.addEventListener("click", showDropdown);
});

window.addEventListener("click", hideDropdowns);

function closeNavigation() {
    navigation.style.display = "none";
    btnMenu.classList.remove("fixed");
    overlay.remove();
}

function toggleNavigation() {
    if (navigation.style.display === "grid") {
        closeNavigation();
        return;
    }

    navigation.style.display = "grid";
    btnMenu.classList.add("fixed");
    body.append(overlay);
}

function showDropdown(event) {
    dropdowns.forEach((dropdown) => {
        dropdown.classList.add("hidden");
    });

    const dropdown = event.target.closest(".header-nav__item").querySelector(".dropdown");
    if (!dropdown) return;

    dropdown.classList.remove("hidden");
}

function hideDropdowns(event) {
    const navItem = event.target.closest(".header-nav__item");
    if (navItem) return;

    dropdowns.forEach((dropdown) => {
        dropdown.classList.add("hidden");
    });
}

// const navigation = document.querySelector(".container--navigation");
// const btnMenu = document.querySelector(".btn--menu");
// const body = document.querySelector("body");
// const navigationItems = document.querySelectorAll(".header-nav__item");
// const dropdowns = document.querySelectorAll(".dropdown");

// const overlay = document.createElement("div");
// overlay.classList.add("overlay");

// overlay.addEventListener("click", () => {
//     navigation.style.display = "none";
//     btnMenu.classList.remove("fixed");
//     overlay.remove();
// });

// btnMenu.addEventListener("click", () => {
//     if (navigation.style.display === "grid") {
//         navigation.style.display = "none";
//         btnMenu.classList.remove("fixed");
//         overlay.remove();
//         return;
//     }

//     navigation.style.display = "grid";
//     btnMenu.classList.add("fixed");
//     body.append(overlay);
// });

// navigationItems.forEach((item) => {
//     item.addEventListener("click", (event) => {
//         dropdowns.forEach((dropdown) => {
//             dropdown.classList.add("hidden");
//         });

//         const dropdown = event.target.closest(".header-nav__item").querySelector(".dropdown");
//         if (!dropdown) return;

//         dropdown.classList.remove("hidden");
//     });
// });

// window.addEventListener("click", (event) => {
//     const navItem = event.target.closest(".header-nav__item");
//     if (navItem) return;

//     dropdowns.forEach((dropdown) => {
//         dropdown.classList.add("hidden");
//     });
// });
