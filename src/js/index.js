import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const refs = {
  breedSelect: document.querySelector('.breed-select'),
  catInfo: document.querySelector('.cat-info'),
};

fetchBreeds()
  .then(data => {
    console.log(data);

    function createMarkup(data) {
      return data
        .map(({ id, name }) => {
          return `<option value=${id}>${name}</option>`;
        })
        .join('');
    }

    refs.breedSelect.insertAdjacentHTML('beforeend', createMarkup(data));
  })
  .catch(err => console.log(err));

fetchCatByBreed().then(data => console.log(data));
