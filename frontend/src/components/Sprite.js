import React from "react"

const Sprite = ({ name, hidden }) => {
  return (
    <>
      {
        hidden ?
          <img className="sprite" src={`http://localhost:3001/pokemon/hidden/${name}.png`}></img>
          : <img className="sprite" src={`http://localhost:3001/pokemon/shown/${name}.png`}></img>
      }
    </>
  )
}

export default Sprite