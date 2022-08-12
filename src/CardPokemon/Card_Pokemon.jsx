import React from 'react'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Card_Pokemon = ({ pokemon }) => {

  const urlPokemon = pokemon.url


  const [dataPokemon, setDataPokemon] = useState(urlPokemon)

  useEffect(() => {
    axios.get(urlPokemon)
      .then(res => setDataPokemon(res.data))
      .catch(err => console.log(err))
  }, [])

  console.log(dataPokemon)

  return (

      <div className='Card'>
        <h3>ID: {dataPokemon?.id}</h3>
        <h3>Nombre: {dataPokemon?.name}</h3>
        <img src={dataPokemon.sprites?.other.dream_world.front_default} alt="" />
        <p><b>Tipo:</b> {dataPokemon.types?.[0].type.name}</p>
        <p><b>Movimiento:</b> {dataPokemon.moves?.[0].move.name}</p>
      </div>

  )

}

export default Card_Pokemon