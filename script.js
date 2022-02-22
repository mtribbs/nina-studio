// panels
const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    removeActiveClass();

    panel.classList.add("active");
  });
});

function removeActiveClass() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

console.log("Hello");

// dropdown
const menuBtn = document.getElementById("menubtn");
const dropDownList = document.getElementById("dropdown-list");

dropDownList.style.display = "none";

function menuClosed() {
  dropDownList.style.display = "none";
}

function menuOpen() {
  dropDownList.style.display = "flex";
}

function openMenu() {
  if (dropDownList.style.display === "none") {
    return menuOpen();
  } else {
    return menuClosed();
  }
}

menuBtn.addEventListener("click", openMenu);

document.addEventListener("click", function (menuClick) {
  const clickOnMenuBtn = menuBtn.contains(menuClick.target);
  const clickInsideMenu = dropDownList.contains(menuClick.target);

  if (!clickOnMenuBtn && !clickInsideMenu) {
    return menuClosed();
  }
});
