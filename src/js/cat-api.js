const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_h4rXP6k712FItPzlv4CzVENgeHJjXm6PhC2qqHs9ALeUyqOD7G0DJszHUDH4miQN';

export function fetchBreeds() {
  return fetch(`${BASE_URL}/breeds`, {
    headers: { 'x-api-key': API_KEY },
  }).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}

export function fetchCatByBreed(breedId) {
  const URL = `https://api.thecatapi.com/v1/images/${breedId}`;

  return fetch(URL).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
