import React from "react";

const Results = ({ gameResult, guesses }) => {
  return (
    <div className="result">
      <div className="result-content">
        <p>
          {
            gameResult ? `You won on guess: ${guesses - 1}!` : "You lost!"
          }
        </p>
      </div>
    </div>
  )
}

export default Results