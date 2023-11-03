import React from 'react';
import bulbasaurImage from './images/bulbasaur.png'; // assuming the image is in an images folder at the same level as this file

function Showcase() {
  let favPokemon = 'Bulbasaur';

  let pokeCharacteristics = {
    type: 'Grass',
    move: 'Vine Whip'
  };

  return (
    <div className="Showcase">
      <h1>{favPokemon}'s Showcase</h1>
      <img src={bulbasaurImage} alt={favPokemon} />
      <h2>
        <span style={{ backgroundColor: 'green', color: 'white' }}>{favPokemon}'s type is {pokeCharacteristics.type}</span> 
        and 
        <span style={{ backgroundColor: 'white', color: '#008000' }}> one of their moves is {pokeCharacteristics.move}</span>
      </h2>
    </div>
  );
}

export default Showcase;