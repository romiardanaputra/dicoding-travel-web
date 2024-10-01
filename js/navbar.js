const navIconOpen = document.querySelector("#navIconOpen");
navIconOpen.addEventListener("click", () => {
  document.getElementById("nav").style.width = "100%";
});

const navIconClose = document.querySelector("#navIconClose");
navIconClose.addEventListener("click", () => {
  document.getElementById("nav").style.width = "0";
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    document.querySelector(".nav__wrapper").style.width = "100%";
  } else {
    document.querySelector(".nav__wrapper").style.transition = "none";
    setTimeout(() => {
      document.querySelector(".nav__wrapper").style.transition =
        "all 0.3s ease-in-out";
    }, 10);
    document.querySelector(".nav__wrapper").style.width = "0";
  }
});
