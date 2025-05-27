function UISLiderComponent(images, left, right) {
  const root = document.querySelector("#root");

  const frame = document.createElement("div");
  const cards = document.createElement("div");
  const triggers = document.createElement("div");

  const leftBtn = document.createElement("button");
  const rightBtn = document.createElement("button");

  HTMLCollection.prototype.forEach = function (callback) {
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  };

  let sliderIndex = 0;

  const roundsButton = [];

  leftBtn.textContent = left;
  rightBtn.textContent = right;

  frame.append(triggers, cards);
  triggers.append(leftBtn, rightBtn);
  root.append(frame);

  triggers.classList.add("triggers");
  frame.classList.add("frame");
  cards.classList.add("cards");

  images.forEach((imgSrc) => {
    const card = document.createElement("div");
    card.style.backgroundImage = `url("${imgSrc}")`;
    card.classList.add("card");
    cards.append(card);
  });

  leftBtn.addEventListener("click", goLeft);
  rightBtn.addEventListener("click", goRight);

  function goRight() {
    if (sliderIndex < images.length - 1) {
      sliderIndex++;
    } else {
      sliderIndex = 0;
    }
    cards.style.left = `${sliderIndex * -500}px`;

    roundsButton.forEach((btn, i) =>
      btn.classList.toggle("active", i === sliderIndex)
    );
  }

  function goLeft() {
    if (sliderIndex !== 0) {
      sliderIndex--;
    } else {
      sliderIndex = images.length - 1;
    }
    cards.style.left = `${sliderIndex * -500}px`;

    roundsButton.forEach((btn, i) =>
      btn.classList.toggle("active", i === sliderIndex)
    );
  }

  function createRoundsButtons() {
    const container = document.createElement("div");
    container.classList.add("rounds");

    frame.append(container);

    images.forEach((imgSrc, ind) => {
      const button = document.createElement("button");
      container.append(button);
      roundsButton.push(button);

      button.addEventListener("click", () => {
        sliderIndex = ind;
        cards.style.left = `${sliderIndex * -500}px`;

        // container.children.forEach((button) => {
        //   button.classList.remove("active");
        // });

        // button.classList.add("active");
        roundsButton.forEach((btn, i) =>
          btn.classList.toggle("active", i === sliderIndex)
        );
      });
    });
  }

  createRoundsButtons();
}

const images = [
  "https://www.vinterier.ru/pictures/shop/krasivyiy-peiyzag-kartina-maslom-40x30.jpg",
  "https://kartin.papik.pro/uploads/posts/2023-07/thumbs/1688461053_kartin-papik-pro-p-kartinki-priroda-leto-krasivie-v-khoroshem-56.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Altdorfer-Donau.jpg/220px-Altdorfer-Donau.jpg",
  "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
];

UISLiderComponent(images, "<", ">");
