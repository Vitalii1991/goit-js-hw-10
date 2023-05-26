fetch("https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=live_h4rXP6k712FItPzlv4CzVENgeHJjXm6PhC2qqHs9ALeUyqOD7G0DJszHUDH4miQN").then((e=>e.json())).then((e=>{console.log(e);for(const o of e)console.log(o.id)})).catch((e=>[console.log(e)]));
//# sourceMappingURL=index.b88c4b60.js.map
