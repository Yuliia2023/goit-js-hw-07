import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryItems = iterateArrayGalleryItems(galleryItems);
function iterateArrayGalleryItems(list) {
  return list
    .map(
      ({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
  </a>
</li>`
    )
    .join("");
}
gallery.innerHTML = galleryItems;
gallery.addEventListener("click", handleFunctionForPhotoList);
function handleFunctionForPhotoList(evt) {
  evt.preventDefault();

  let lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
  });
}
