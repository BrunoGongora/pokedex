import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios'
import Card_Pokemon from './CardPokemon/Card_Pokemon'
import Imput from './CardPokemon/Imput'

function App() {
  const [data, setData] = useState([])

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=150&offset=0'
    axios.get(url)
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }, [])
  

  return (
    <div className="App">
      <img className='logo' src="../src/logo_pokemon.png" alt="" />
      <Imput />
    <div className='container'>
      {
        data.results?.map(pokemon => (
          <Card_Pokemon 
            pokemon={pokemon}
          />
        ))
      }
    </div>
    </div>
  )
}

export default App
