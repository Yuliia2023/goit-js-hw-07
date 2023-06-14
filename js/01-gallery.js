import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const paletteCards = document.querySelector(".gallery");
const cardsMarkup = createCards(galleryItems);

paletteCards.insertAdjacentHTML("beforeend", cardsMarkup);
paletteCards.addEventListener("click", onPaletteClick);
function createCards(cards) {
  return cards
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}
            "
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `;
    })
    .join(" ");
}
function onPaletteClick(event) {
  event.preventDefault();
  paletteCards.toggleAttribute("href");
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const selectedImage = event.target.dataset.source;

  const instance = basicLightbox.create(`
      <img src="${selectedImage}" width="800" height="600">
  `);
  instance.show();

  paletteCards.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      instance.close();
    }
  });
}
