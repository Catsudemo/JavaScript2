/* eslint-disable */

/* 
  Call this function to get a JSON string of the data
  (simulates calling a server to retrieve data)
*/
var name = window.prompt('Enter your name:');
var color = window.prompt('Choose fire, water or grass.');

function fetchPokemonData(type) {
  if (type == 'fire') {
    return `{"abilities": [{"ability": {"name": "solar-power","url": "https://pokeapi.co/api/v2/ability/94/"},"is_hidden": true,"slot": 3},{"ability": {"name": "blaze","url": "https://pokeapi.co/api/v2/ability/66/" },"is_hidden": false,"slot": 1}],"base_experience": 62,"forms": [{"name": "charmander","url": "https://pokeapi.co/api/v2/pokemon-form/4/"}], "height": 6,"held_items": [],"id": 4,"is_default": true,"location_area_encounters": "https://pokeapi.co/api/v2/pokemon/4/encounters","order": 5,"species": {"name": "charmander", "url": "https://pokeapi.co/api/v2/pokemon-species/4/"},"sprites": {"back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/4.png","back_female": null,"back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/4.png","back_shiny_female": null,"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png","front_female": null,"front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/4.png","front_shiny_female": null}}`;
  }
  if (type == 'water') {
    return `{"abilities":[{"ability":{"name":"rain-dish","url":"https://pokeapi.co/api/v2/ability/44/"},"is_hidden":true,"slot":3},{"ability":{"name":"torrent","url":"https://pokeapi.co/api/v2/ability/67/"},"is_hidden":false,"slot":1}],"base_experience":63,"forms":[{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-form/7/"}],"height":5,"held_items":[],"id":7,"is_default":true,"location_area_encounters":"https://pokeapi.co/api/v2/pokemon/7/encounters","name":"squirtle","order":10,"species":{"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon-species/7/"},"sprites":{"back_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/7.png","back_female":null,"back_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/7.png","back_shiny_female":null,"front_default":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png","front_female":null,"front_shiny":"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png","front_shiny_female":null},"stats":[{"base_stat":43,"effort":0,"stat":{"name":"speed","url":"https://pokeapi.co/api/v2/stat/6/"}},{"base_stat":64,"effort":0,"stat":{"name":"special-defense","url":"https://pokeapi.co/api/v2/stat/5/"}},{"base_stat":50,"effort":0,"stat":{"name":"special-attack","url":"https://pokeapi.co/api/v2/stat/4/"}},{"base_stat":65,"effort":1,"stat":{"name":"defense","url":"https://pokeapi.co/api/v2/stat/3/"}},{"base_stat":48,"effort":0,"stat":{"name":"attack","url":"https://pokeapi.co/api/v2/stat/2/"}},{"base_stat":44,"effort":0,"stat":{"name":"hp","url":"https://pokeapi.co/api/v2/stat/1/"}}],"types":[{"slot":1,"type":{"name":"water","url":"https://pokeapi.co/api/v2/type/11/"}}],"weight":90}`;
  }
  if (type == 'grass') {
    return `{"abilities": [{"ability": {"name": "chlorophyll","url": "https://pokeapi.co/api/v2/ability/34/"},"is_hidden": true,"slot": 3},{"ability": {"name": "overgrow","url": "https://pokeapi.co/api/v2/ability/65/"},"is_hidden": false,"slot": 1}],"base_experience": 64,"forms": [ {"name": "bulbasaur","url": "https://pokeapi.co/api/v2/pokemon-form/1/"}],"name": "bulbasaur","order": 1,"species": {"name": "bulbasaur","url": "https://pokeapi.co/api/v2/pokemon-species/1/"},"sprites": {"back_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png","back_female": null,"back_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/1.png","back_shiny_female": null,"front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png","front_female": null,"front_shiny": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/1.png","front_shiny_female": null},"weight": 69}`;
  }
}

function pokemonName(type) {
  if (type == 'fire') {
    return 'Charmander';
  }
  if (type == 'water') {
    return 'Squirtle';
  }
  if (type == 'grass') {
    return 'Bulbasaur';
  }
}

let pokeName = pokemonName(color);
/*Code goes below */

function parsemon() {
  let pokeProperties = JSON.parse(fetchPokemonData(color));
  let justSprites = Object.keys(pokeProperties.sprites)
    .map(key => pokeProperties.sprites[key])
    .filter(sprite => sprite);
  return justSprites;
}
let unorderedSprites = parsemon();
let sprites = unorderedSprites.reverse();

const mySpriteSpot = document.querySelector('#poke-selector');

const intro = document.createElement('div');
intro.setAttribute('class', 'oakText');
intro.innerText = `Well, well. If it isn't young ${name}. Finally ready to become a Pokemon trainer! Why it seems only yesterday you were toddling around the garden with the Butterfrees and Bellsprouts. 
Well it looks like you've made a great choice with your first Pokemon. I'm sure this ${pokeName} will serve you well.`;
mySpriteSpot.appendChild(intro);

const div = document.createElement('div');
div.setAttribute('class', 'wrapper');

for (sprite in sprites) {
  const eachSpriteDiv = document.createElement('div');
  eachSpriteDiv.id = sprite;
  eachSpriteDiv.setAttribute('class', 'box');

  // const name = document.createElement('h4');
  // name.innerText = `This is sprite ${sprite}`;
  // eachSpriteDiv.appendChild(name);
  // console.log(name);

  const picture = document.createElement('IMG');
  picture.src = sprites[sprite];
  eachSpriteDiv.appendChild(picture);

  div.appendChild(eachSpriteDiv);

  mySpriteSpot.appendChild(div);

  console.log('Name is' + name + 'sprite is' + sprites[sprite]);
}
