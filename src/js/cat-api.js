const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
const FULL_INFO_URL =
  'https://api.thecatapi.com/v1/images/search?breed_ids={breed.id}';
const API_KEY =
  'live_h4rXP6k712FItPzlv4CzVENgeHJjXm6PhC2qqHs9ALeUyqOD7G0DJszHUDH4miQN';

export function fetchBreeds() {
  return fetch(BASE_URL, {
    headers: { 'x-api-key': API_KEY },
  }).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

export function fetchCatByBreed(breedId) {
  return fetch(FULL_INFO_URL).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
