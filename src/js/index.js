import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
import Notiflix from 'notiflix';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
  loaderHidden: document.querySelector('.loader-hidden'),
  loader: document.querySelector('.loader'),
};

let isFirstClick = true;

refs.breedSelect.addEventListener('click', onClickBreedSelect);
refs.breedSelect.addEventListener('change', onSelectBreed);

fetchBreeds()
  .then(data => {
    console.log(data);

    if (data) {
      refs.loaderHidden.hidden = true;

      createMarkup(data);
      refs.breedSelect.insertAdjacentHTML('beforeend', createMarkup(data));
    }
  })
  .catch(err => {
    console.log(err);

    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  });

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
        if (data) {
          const urlPicture = data[0].url;
          const markup = `<img src="${urlPicture}" alt="cat""></img>`;

          refs.catInfo.innerHTML = markup;
        }
      })
      .catch(err => {
        console.log(err);
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
      });
  }
}
