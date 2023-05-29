import { fetchBreeds } from './cat-api';

const selectBreed = document.querySelector('.breed-select');

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

    selectBreed.insertAdjacentHTML('beforeend', createMarkup(data));
  })
  .catch(err => console.log(err));
