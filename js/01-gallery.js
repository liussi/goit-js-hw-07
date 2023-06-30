import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" onclick="return false" href="${original}">
  <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
  />
</a>
</li>

`)
galleryEl.insertAdjacentHTML('beforeend', markup.join(''));
galleryEl.addEventListener('click', onClick);

function onClick (event) {
    const isCardEl = event.target.classList.contains('gallery__image');
if (!isCardEl){
    return;
}
console.log(event.target)

const galleryImage = event.target.dataset.source;
galleryEl.src = galleryImage;

const instance = basicLightbox.create(`
    <img src="${galleryImage}">
`)

instance.show();

// document.addEventListener('keydown', (event)=> {
//   if(event.code === 'Escape') {
//     instance.onClose: (instance) => {
//       document.removeEventListener('keydown');
//     }
//   }
// });



document.addEventListener('keydown', onCheck);
document.removeEventListener('keydown', onCheck)
 function onCheck (event) {
  if(event.code === 'Escape')onClose(instance)
 }}




