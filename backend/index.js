const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const randGen = require("random-seed")
const pokemonJSON = require("./pokemon.json")

app.use(express.json())
app.use(cors())
app.use(express.static(__dirname + "/public/"))

app.get("/api/pokemon", (req, res) => {
  let date = new Date()
  const gen = randGen.create(new Date(date.getFullYear(), date.getMonth(), date.getDay()))
  const index = gen(151) + 1
  const pokemon = pokemonJSON.pokemon.find(obj => obj.number === index)
  res.json(pokemon)
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})