import { React, useEffect, useState } from "react"
import pokemonService from "./services/pokemon"
import Pokemon from "./components/Pokemon"
import Guess from "./components/Guess"
import Results from "./components/Results"
import Header from "./components/Header"

const MAX = 151
const MIN = 1

const App = () => {

  const [pokemon, setPokemon] = useState("")
  const [guess, setGuess] = useState("")
  const [guessCount, setGuessCount] = useState(1)
  const [gameActive, setGameActive] = useState(true)
  const [gameResult, setGameResult] = useState(false)
  const [guessSelected, setGuessSelected] = useState(true)
  const [giveSelected, setGiveSelected] = useState(false)

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    }
  }

  useEffect(() => {
    const num = Math.floor(Math.random() * (MAX - MIN + 1) + MIN)
    pokemonService
      .getPokemon(num)
      .then(pokemon => {
        setPokemon(pokemon.name.toUpperCase())
      })
  }, [])

  const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    useEffect(() => {
      const handleResize = () => {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])

    return windowDimensions
  }


  const handleGuessUpdate = event => {
    setGuess(event.target.value.toUpperCase())
  }

  const updateGameState = () => {

    if (guess === pokemon && guessCount < 6) {
      setGameActive(false)
      setGameResult(true)
    } else if (guessCount >= 6) {
      setGameActive(false)
    }
  }

  const handleSubmit = event => {
    console.log(guessCount)
    event.preventDefault()
    setGuessCount(guessCount + 1)
    updateGameState()
  }

  const handleGuessClick = event => {
    setGuessSelected(true)
    setGiveSelected(false)
  }

  const handleGiveClick = event => {
    setGiveSelected(true)
    setGuessSelected(false)
  }

  return (
    <div>
      <Header />
      <div className="game-container">
        <div className="game">
          {
            pokemon !== "" ?
              <Pokemon name={pokemon} hideSprite={gameActive} />
              : null
          }
          <div className="guess-container">
            <div className="guesses-remaining">
              <p>GUESSES: {7 - guessCount}/6</p>
            </div>
            {
              pokemon !== "" ?
                <Guess
                  guess={guess}
                  handleSubmit={handleSubmit}
                  handleGuess={handleGuessUpdate}
                  guessSelected={guessSelected}
                  giveSelected={giveSelected}
                  onGuessClick={handleGuessClick}
                  onGiveClick={handleGiveClick}
                  getWindowDimensions={useWindowDimensions}
                  gameActive={gameActive}
                  gameResult={gameResult}
                />
                : null
            }
            {
              !gameActive ?
                <Results gameResult={gameResult} />
                : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
