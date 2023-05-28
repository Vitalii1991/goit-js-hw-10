const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT_IMAGE = '/images/search';
const BREEDS = '?has_breeds=1';
const api_key =
  'live_h4rXP6k712FItPzlv4CzVENgeHJjXm6PhC2qqHs9ALeUyqOD7G0DJszHUDH4miQN';

function getCatsCollection() {
  const URL = `${BASE_URL}${END_POINT_IMAGE}${BREEDS}`;

  return fetch(URL, {
    headers: {
      'x-api-key': api_key,
    },
  }).then(res => res.json());
}

getCatsCollection().then(data => console.log(data));
