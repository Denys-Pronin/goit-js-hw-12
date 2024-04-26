// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

export function fetchImages(searchText) {
  const API = '43543363-2c3a057550dcf1951d3e0c854';
  const url = `https://pixabay.com/api/?key=${API}&q=${searchText}&image_type=photo&orientation=horizontal&safesearch=true&`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          position: 'topRight',
          backgroundColor: '#EF4040',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          messageColor: '#fff',
        });
      } else {
        return data;
      }
    })
    .catch(error => {
      console.error('There was a problem with your fetch operation:', error);
    });
}
