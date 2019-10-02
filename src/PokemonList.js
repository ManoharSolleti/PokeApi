import React from 'react';
import './PokemonList.css';

export default function PokemonList({pokemon}) {
  return (
    <div className='PokemonList'>
      <ul>
      {pokemon.map(p => (
        <li key={p}>
          {p}
          </li>
      ))}
      </ul>
    </div>
  )
}
