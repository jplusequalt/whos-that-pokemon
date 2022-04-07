const express = require("express")
const app = express()
require("dotenv").config()
const cors = require("cors")
const pokemonJSON = require("./pokemon.json")

app.use(express.json())
app.use(cors())
app.use(express.static(__dirname + "/public/"))

app.get("/api/pokemon/:id", (req, res) => {
  const id = +req.params.id
  const pokemon = pokemonJSON.pokemon.find(obj => obj.number === id)
  res.json(pokemon)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})