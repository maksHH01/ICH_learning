const modal = document.querySelector(".modal");
const modalBody = document.querySelector(".modal > div");
const openModalBtn = document.querySelector("button");
const closeModalBtn = document.querySelector(".closeModalBtn");
const acceptBtn = document.querySelector(".accept");

const toggleModal = () => {
  modal.classList.toggle("modalHidden");
};

openModalBtn.addEventListener("click", () => {
  toggleModal();
  acceptBtn.focus();
});
modal.addEventListener("click", toggleModal);
closeModalBtn.addEventListener("click", toggleModal);
modalBody.addEventListener("click", (e) => e.stopPropagation());

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" || event.key === "Esc") {
    modal.classList.add("modalHidden");
  }
});

// acceptBtn.addEventListener("blur", (event) => {
//   console.log(event);
//   toggleModal();
// });
