import React from "react"
import Sprite from "./Sprite.js"

const Pokemon = ({ name, hideSprite }) => {
  return (
    <div className="pokemon-container">
      <div>
        <div className="pokemon-name">
          <p>
            {
              hideSprite ?
                "A WILD PKMN"
                : `${name.toUpperCase()}`
            }
          </p>
        </div>
      </div>
      <div>
        {
          hideSprite ?
            <Sprite name={name.toLowerCase()} hidden={true} />
            : <Sprite name={name.toLowerCase()} hidden={false} />
        }
      </div>
    </div>
  )
}

export default Pokemon