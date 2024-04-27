import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const search = document.querySelector('.search');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more');
const API = '43543363-2c3a057550dcf1951d3e0c854';
const perPage = 15;
let currentPage = 1;
let totalImages = 0;
let totalHits = 0;
let galleryItemHeight = 0;

search.addEventListener('submit', formSubmit);
loadMoreBtn.addEventListener('click', loadMoreImages);

function formSubmit(event) {
  event.preventDefault();
  const searchText = document.querySelector('.search-field').value;
  const gallery = document.querySelector('.gallery');
  gallery.textContent = '';
  currentPage = 1;

  if (searchText.trim() === '') {
    search.reset();
  } else {
    const url = `https://pixabay.com/api/?key=${API}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`;
    loader.style.display = 'block';
    fetchImages(url).then(data => {
      renderImages(data.hits);
      loader.style.display = 'none';
      lightbox.refresh();
      toggleLoadMoreButton(data.hits.length > 0);
      totalImages += data.hits.length;
      totalHits = data.totalHits;
      galleryItemHeight = gallery
        .querySelector('.gallery-item')
        .getBoundingClientRect().height;
      window.scrollBy({ top: galleryItemHeight * 2, behavior: 'smooth' });
    });
  }
}

function loadMoreImages() {
  loader.style.display = 'block';
  currentPage++;
  const searchText = document.querySelector('.search-field').value;
  const url = `https://pixabay.com/api/?key=${API}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${perPage}&page=${currentPage}`;
  if (totalImages === totalHits) {
    iziToast.show({
      position: 'topRight',
      backgroundColor: '#EF4040',
      message: "We're sorry, but you've reached the end of search results.",
      messageColor: '#fff',
    });
    loadMoreBtn.style.display = 'none';
    loader.style.display = 'none';
  } else {
    fetchImages(url)
      .then(data => {
        renderImages(data.hits);
        loader.style.display = 'none';
        toggleLoadMoreButton(data.hits.length > 0);
        totalImages += data.hits.length;
        window.scrollBy({
          top: galleryItemHeight * 5 + 150,
          behavior: 'smooth',
        });
      })
      .catch(error => {
        console.error('Error fetching images:', error);
        loader.style.display = 'none';
      });
  }
}

function toggleLoadMoreButton(show) {
  loadMoreBtn.style.display = show ? 'block' : 'none';
}

let lightbox = new SimpleLightbox('.gallery-img a', {});
lightbox.on('show.simplelightbox', function () {});
