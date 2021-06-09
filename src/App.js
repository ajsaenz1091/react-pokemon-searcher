import React, { useState, useEffect } from 'react'
import PokemonPage from './components/PokemonPage'
import './App.css'

const App = () => {

  const [pokemon, setPokemon] = useState([])
  const [filterTerm, setFilterTerm] = useState("")


  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemonData => setPokemon(pokemonData))
  }, [])

  const handleFilterTerm = (e) => {
    const input = e.target.value
    setFilterTerm(input)
  }

  const filterPokemon = () => {
    const filteredPokemon = pokemon.filter(pokemon => {
      return pokemon.name.includes(filterTerm)
    })
    return filteredPokemon;
  }

  const addNewPokemon = (name, hp, front, back) => {
    // console.log(name, hp, front, back)
    //build data for config Obj
    const newPokemon = {
      hp: hp,
      name: name,
      sprites: {
        back: back,
        front: front
      }
    }
    console.log(newPokemon)
    //build config object and pass new pokemon to it
    const configObj = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPokemon)
    }
    // make your POST with the configObj
    fetch('http://localhost:3000/pokemon', configObj)
      .then(res => res.json())
      .then(newPokemonObj => setPokemon(prevState => [...prevState, newPokemonObj]))
  }

  return (
    <div className="App">
      <PokemonPage addNewPokemon={addNewPokemon} handleFilterTerm={handleFilterTerm} pokemon={(filterTerm === "") ? pokemon : filterPokemon()} />
    </div>
  )
}

export default App
