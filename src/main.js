import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const search = document.querySelector('.search');
const loader = document.querySelector('.loader');
search.addEventListener('submit', formSubmit);

function formSubmit(event) {
  event.preventDefault();
  const searchText = document.querySelector('.search-field').value;

  if (searchText.trim() === '') {
    search.reset();
  } else {
    loader.style.display = 'block';
    fetchImages(searchText).then(data => {
      renderImages(data.hits);
      loader.style.display = 'none';
      lightbox.refresh();
    });
  }
}

let lightbox = new SimpleLightbox('.gallery-img a', {});
lightbox.on('show.simplelightbox', function () {});
