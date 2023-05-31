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

    setTimeout(() => {
      if (data) {
        refs.loaderHidden.hidden = true;

        createMarkup(data);
        refs.breedSelect.insertAdjacentHTML('beforeend', createMarkup(data));
      }
    }, 2000);
  })
  .catch(err => {
    console.log(err);

    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  });

function createMarkup(data) {
  return data
    .map(({ reference_image_id, name }) => {
      return `<option value=${reference_image_id}>${name}</option>`;
    })
    .join('');
}

function onClickBreedSelect() {
  isFirstClick = false;
}

function onSelectBreed(e) {
  if (!isFirstClick) {
    refs.catInfo.innerHTML = '';
    refs.loaderHidden.hidden = false;

    const breedId = e.target.value;

    fetchCatByBreed(breedId)
      .then(data => {
        setTimeout(() => {
          if (data) {
            console.log(data);

            refs.loaderHidden.hidden = true;

            const pictureUrl = data.url;
            const catName = data.breeds[0].name;
            const catDescription = data.breeds[0].description;
            const catTemperament = data.breeds[0].temperament;

            console.log(catDescription);
            console.log(catName);
            console.log(catTemperament);

            const markup = `<img src="${pictureUrl}" alt="cat""></img>
            <div><h2>${catName}</h2>
            <p>${catDescription}</p>
            <p><span class="temperament">Temperament:</span>${catTemperament}</p></div>`;

            refs.catInfo.innerHTML = markup;
          }
        }, 1000);
      })
      .catch(err => {
        console.log(err);
        Notiflix.Notify.failure(
          'Oops! Something went wrong! Try reloading the page!'
        );
      });
  }
}
