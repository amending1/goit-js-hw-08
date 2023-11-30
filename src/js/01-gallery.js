import simpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';

// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');

const images = galleryItems.map(item => {
  return `<li>
     <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"
        />
     </a>
   </li>`;
});
galleryContainer.insertAdjacentHTML('beforeend', images.join(''));
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
