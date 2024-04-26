export function renderImages(images) {
  const gallery = document.querySelector('.gallery');
  gallery.textContent = '';
  const markup = images
    .map(item => {
      console.log(item);
      return `<li class="gallery-item">
	          <div class="gallery-img">
            <a href="${item.largeImageURL}"><img src="${item.webformatURL}"></a>
            </div>
	          <div class="property-wrapper">
            <div class="property">
            Likes
            <span class="value">${item.likes}</span>
            </div>
	          <div class ="property">
            Views
            <span class="value">${item.views}</span>
            </div>
	          <div class ="property">
            Comments
            <span class="value">${item.comments}</span>
            </div>
	          <div class ="property">
            Downloads
            <span class="value">${item.downloads}</span>
            </div>
            </div>
	        </li>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}
