import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loader: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

let isFirstClick = true;

refs.breedSelect.addEventListener('click', onClickBreedSelect);
refs.breedSelect.addEventListener('change', onSelectBreed);

fetchBreeds()
  .then(data => {
    console.log(data);

    if (data) {
      refs.loader.textContent = '';
      refs.error.textContent = '';

      createMarkup(data);
      refs.breedSelect.insertAdjacentHTML('beforeend', createMarkup(data));
    }
  })
  .catch(err => console.log(err));

function createMarkup(data) {
  return data
    .map(({ id, name }) => {
      return `<option value=${id}>${name}</option>`;
    })
    .join('');
}

function onClickBreedSelect() {
  isFirstClick = false;
}

function onSelectBreed(e) {
  if (!isFirstClick) {
    const breedId = e.target.value;

    fetchCatByBreed(breedId)
      .then(data => {
        console.log(data);

        const urlPicture = data[0].url;
        const markup = `<img src="${urlPicture}" alt="cat""></img>`;

        refs.catInfo.innerHTML = markup;
      })
      .catch(err => console.log(err));
  }
}
