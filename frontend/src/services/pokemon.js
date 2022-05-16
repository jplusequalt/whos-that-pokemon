import axios from 'axios'

const getPokemon = () => {
  const req = axios.get(`http://localhost:3001/api/pokemon`)
  return req.then(res => res.data)
}

const pokemonService = {
  getPokemon
}

export default pokemonService