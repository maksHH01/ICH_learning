const liElements = document.querySelectorAll(".liElement");
const navMenu = document.querySelector(".nav_menu");
const overlay = document.querySelector(".overlay");
const openBtn = document.querySelector("#burgerMenuBtn");
const closeBtn = document.querySelector("#closeButton");

const addedLists = document.querySelectorAll(".addedList");

const addedFlags = new Array(liElements.length).fill(false);

openBtn.addEventListener("click", () => {
  navMenu.style.left = "0";
  overlay.classList.add("active");
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", (event) => {
  if (!navMenu.contains(event.target)) {
    closeMenu();
  }
});

function closeMenu() {
  navMenu.style.left = "-355px";
  overlay.classList.remove("active");

  liElements.forEach((li, i) => {
    const list = li.querySelector(".addedList");
    if (list) list.innerHTML = "";
    addedFlags[i] = false;
  });
}

function toggleElements(targetList, index) {
  if (addedFlags[index]) {
    targetList.innerHTML = "";
    addedFlags[index] = false;
  } else {
    const newElement1 = document.createElement("li");
    const newElement2 = document.createElement("li");
    const newElement3 = document.createElement("li");

    newElement1.textContent = `Добавленный элемент ${index + 1}.1`;
    newElement2.textContent = `Добавленный элемент ${index + 1}.2`;
    newElement3.textContent = `Добавленный элемент ${index + 1}.3`;

    [newElement1, newElement2, newElement3].forEach((el) =>
      el.classList.add("addedElement")
    );

    targetList.append(newElement1, newElement2, newElement3);
    addedFlags[index] = true;
  }
}

liElements.forEach((li, index) => {
  li.addEventListener("click", () => {
    const list = addedLists[index];
    toggleElements(list, index);
    console.log(`Нажали на элемент ${index + 1}`);
  });
});
