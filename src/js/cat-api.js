const URL = 'https://api.thecatapi.com/v1/breeds';
const API_KEY =
  'live_h4rXP6k712FItPzlv4CzVENgeHJjXm6PhC2qqHs9ALeUyqOD7G0DJszHUDH4miQN';

export function fetchBreeds() {
  return fetch(URL, {
    headers: { 'x-api-key': API_KEY },
  }).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    return resp.json();
  });
}
