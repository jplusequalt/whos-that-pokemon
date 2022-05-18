import React from "react";

const Header = ({ onSetShowInfo }) => {
  return (
    <div>
      <div className="header">
        <h1>DAILY WHO'S THAT POKEMON</h1>
        <div className="info">
          <button onClick={onSetShowInfo}>?</button>
        </div>
      </div>
    </div>
  )
}

export default Header