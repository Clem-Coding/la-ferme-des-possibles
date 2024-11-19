document.addEventListener("DOMContentLoaded", () => {
  const sidenav = document.getElementById("burgerNav");
  const openBtn = document.getElementById("openBtn");
  const closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  function openNav() {
    sidenav.classList.add("active");
  }

  function closeNav(event) {
    event.preventDefault();
    sidenav.classList.remove("active");
  }
});
