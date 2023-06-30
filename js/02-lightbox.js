import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" onclick="return false" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" title="${description}" />
</a>
</li>
`);
galleryEl.insertAdjacentHTML('beforeend', markup.join(''));
galleryEl.addEventListener('click', onClick);


function onClick (event) {
    const isCardEl = event.target.classList.contains('gallery__image');
if (!isCardEl){
    return;
}
// console.log(event.target)

let lightbox = new SimpleLightbox('.gallery a', { 
    captions : true,
    captionPosition : 'bottom',
    captionDelay : 250,
 });

}