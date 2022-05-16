import React from "react";

const Results = ({ gameResult, guesses }) => {
  return (
    <div className="result">
      <div className="result-content">
        <p>
          {
            gameResult ? `You won in ${guesses - 1} guesses!` : "You lost!"
          }
        </p>
      </div>
    </div>
  )
}

export default Results