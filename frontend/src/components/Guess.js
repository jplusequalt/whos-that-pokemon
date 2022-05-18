import React from "react";

const Guess = (
  { guess,
    handleSubmit,
    handleGuess,
    guessSelected,
    giveSelected,
    onGuessClick,
    onGiveClick,
    getWindowDimensions,
    gameActive,
    gameResult
  }) => {

  const { height, width } = getWindowDimensions()

  return (
    <div>
      <form onSubmit={handleSubmit} className="guess-form">
        <div className="input-container">
          {
            gameActive ?
              <div>
                <div className="input" onClick={onGuessClick}>
                  <div className="label">
                    {
                      guessSelected ? <img src={require("../images/select.png")} className="select-show"></img>
                        : <img src={require("../images/select.png")} className="select-hide"></img>
                    }
                    {
                      width >= 700 ?
                        <label className="label-select">GUESS: </label>
                        : null
                    }
                  </div>
                  <input
                    type="text"
                    value={guess}
                    onChange={handleGuess}
                  />
                </div>
                <div className="give-up" onClick={onGiveClick}>
                  <div className="label" >
                    {
                      giveSelected ? <img src={require("../images/select.png")} className="select-show"></img>
                        : <img src={require("../images/select.png")} className="select-hide"></img>
                    }
                    <label className="label-select">GIVE UP</label>
                  </div>
                </div>
              </div>
              : <p>{gameResult ? "YOU WIN!!!" : "YOU LOSE!!!"}</p>
          }
        </div>
      </form>
    </div>
  )
}

export default Guess