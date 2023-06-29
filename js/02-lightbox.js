import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const markup = galleryItems.map(({preview, original, description}) => `<li class="gallery__item">
<a class="gallery__link" onclick="return false" href="${original}">
   <img class="gallery__image" src="${preview}" alt="${description}" />
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
console.log(event.target)
const galleryImage = event.target.getAttribute('Alt');

console.log(galleryImage)

let lightbox = new SimpleLightbox('.gallery a');
galleryEl.on('shown.simplelightbox', function () {
        	captions=true;
});
console.log(lightbox)

// let gallery = new SimpleLightbox('.gallery__image alt');
// gallery.on('shown.simplelightbox', function () {
// 	galleryImage.captions();
// });


// const instance = basicLightbox.create(`
//     <img src="${galleryImage}">
// `)

// instance.show()

}