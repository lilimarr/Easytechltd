// let menuBtn = document.getElementById('menuBtn')

// let menuStuff = document.getElementById('menuStuff')

// menuBtn.addEventListener('click', () => {
//     menuStuff.classList.toggle("hidden")
//     // alert('hello')
// })

const menuBtn = document.getElementById("menuBtn");

const menuStuff = document.getElementById("menuStuff");
const icon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  menuStuff.classList.toggle("hidden");

  // Toggle between hamburger and X icon
  if (menuStuff.classList.contains("hidden")) {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  } else {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }
});

// Close menu when clicking outside
document.addEventListener("click", (event) => {
  const isClickInsideMenu = menuStuff.contains(event.target);
  const isClickOnButton = menuBtn.contains(event.target);

  if (
    !isClickInsideMenu &&
    !isClickOnButton &&
    !menuStuff.classList.contains("hidden")
  ) {
    menuStuff.classList.add("hidden");
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});
