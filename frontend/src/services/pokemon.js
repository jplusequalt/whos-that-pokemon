import axios from 'axios'

const getPokemon = number => {
  const req = axios.get(`http://localhost:3001/api/pokemon/${number}`)
  return req.then(res => res.data)
}

const pokemonService = {
  getPokemon
}

export default pokemonService