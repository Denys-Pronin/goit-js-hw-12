// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
let totalImages = 0;

export async function fetchImages(url) {
  try {
    const response = await axios.get(url);
    console.log(response);
    if (response.data.hits.length === 0) {
      if (response.data.totalHits === totalImages) {
        return [];
      }
      iziToast.show({
        position: 'topRight',
        backgroundColor: '#EF4040',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fff',
      });
      return [];
    } else {
      totalImages += response.data.hits.length;
      return response.data;
    }
  } catch (error) {
    console.log('There was a problem with your fetch operation:', error);
    return [];
  }
}
