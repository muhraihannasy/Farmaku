// Dropdown Mobile
const navGroup = document.querySelector(".nav-group");
const btnOpenNavbar = document.querySelector(".open-navbar");
const btnCloseNavbar = document.querySelector(".close-navbar");
const dropdown = document.querySelectorAll(".dropdown");
const dropdownUl = document.querySelectorAll(".dropdown ul");
const navLink = document.querySelectorAll(".nav-link");

function myFunction(x) {
  if (!x.matches) return;

  for (let i = 0; i < dropdownUl.length; i++) {
    const elementDropdown = dropdown[i];
    const elementDropdownUl = dropdownUl[i];
    const elementLink = navLink[i];

    elementLink.addEventListener("click", () => {
      elementDropdown.classList.toggle("active");
    });
  }
}

btnOpenNavbar.addEventListener("click", () => {
  navGroup.classList.add("active");
});

btnCloseNavbar.addEventListener("click", () => {
  navGroup.classList.remove("active");
});

const maxWidth = "921px";
const x = window.matchMedia(`(max-width: ${maxWidth})`);
myFunction(x);
