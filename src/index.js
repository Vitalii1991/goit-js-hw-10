fetch(
  'https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_h4rXP6k712FItPzlv4CzVENgeHJjXm6PhC2qqHs9ALeUyqOD7G0DJszHUDH4miQN'
)
  .then(responce => {
    return responce.json();
  })
  .then(cats => {
    console.log(cats);

    for (const cat of cats) {
      console.log(cat.id);
    }
  })
  .catch(error => [console.log(error)]);
