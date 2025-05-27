const dialog = document.querySelector(".dialog");
const dialogContent = document.querySelector(".dialogContent");
const closeDialogBtn = document.querySelector(".closeDialog");
const openDialogBtn = document.querySelector(".openDialog");
const saveBtn = document.querySelector(".saveBtn");

const openDialog = () => {
  dialog.classList.add("dialogOpen");
};

const closeDialog = () => {
  dialog.classList.remove("dialogOpen");
};

saveBtn.addEventListener("click", () => {
  closeDialog();
  openDialogBtn.style.display = "block";
});

openDialogBtn.addEventListener("click", () => {
  openDialog();
  openDialogBtn.style.display = "none";
});

closeDialogBtn.addEventListener("click", () => {
  closeDialog();
  openDialogBtn.style.display = "block";
});

dialog.addEventListener("click", (e) => {
  if (!dialogContent.contains(e.target)) {
    closeDialog();
    openDialogBtn.style.display = "block";
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeDialog();
    openDialogBtn.style.display = "block";
  }
});
