const BASE_URL = 'https://api.thecatapi.com/v1';
const END_POINT_IMAGE = '/images/search';
const API_KEY =
  'live_h4rXP6k712FItPzlv4CzVENgeHJjXm6PhC2qqHs9ALeUyqOD7G0DJszHUDH4miQN';

function getCatsCollection() {
  const URL = `${BASE_URL}${END_POINT_IMAGE}?has_breeds=1`;

  return fetch(URL, {
    headers: {
      'x-api-key': API_KEY,
    },
  }).then(res => res.json());
}

getCatsCollection().then(data => console.log(data));
