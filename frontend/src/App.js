import { React, useEffect, useState } from "react"
import { CSSTransition } from 'react-transition-group'
import pokemonService from "./services/pokemon"
import Pokemon from "./components/Pokemon"
import Guess from "./components/Guess"
import Results from "./components/Results"
import Header from "./components/Header"
import Info from "./components/Info"

const App = () => {

  const [pokemon, setPokemon] = useState("")
  const [guess, setGuess] = useState("")
  const [guessCount, setGuessCount] = useState(1)
  const [shake, setShake] = useState(false)
  const [gameActive, setGameActive] = useState(true)
  const [gameResult, setGameResult] = useState(false)
  const [guessSelected, setGuessSelected] = useState(true)
  const [giveSelected, setGiveSelected] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    }
  }

  useEffect(() => {
    pokemonService
      .getPokemon()
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
      return
    } else if (guessCount >= 6) {
      setGameActive(false)
    }

    setShake(true)
    setTimeout(() => {
      setShake(false)
    }, 200)
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

  const handleShowInfo = event => {
    setShowInfo(!showInfo)
  }

  return (
    <div>
      <Header onSetShowInfo={handleShowInfo} />
      <div className="game-container">
        <div className="game">
          {
            pokemon !== "" ?
              <Pokemon name={pokemon} hideSprite={gameActive} />
              : null
          }
          <div className="guess-container">
            <div className="guesses-remaining">
              <CSSTransition
                in={shake}
                timeout={200}
                classNames="shake"
              >
                <p>GUESSES: {7 - guessCount}/6</p>
              </CSSTransition>
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
                <Results gameResult={gameResult} guesses={guessCount} />
                : null
            }
            {
              showInfo ?
                <Info />
                : null
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
