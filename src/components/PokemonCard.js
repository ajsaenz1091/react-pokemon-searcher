import React, { useState, useEffect } from 'react'
import { Card } from 'semantic-ui-react'

const PokemonCard = (props) => {

  const { hp, name, sprites: { back, front } } = props

  const [cardSide, setCardSide] = useState(front)

  // const [showFront, setCardSide] = useState(true)

  const handleClick = () => {
    (cardSide === front) ? setCardSide(back) : setCardSide(front)
    // setCardSide(!showFront)
  }

  useEffect(() => {
    setCardSide(front)
  })


  // (showFront) ? front : back in line 23
  return (
    <Card onClick={handleClick}>
      <div>
        <div className="image">
          <img src={cardSide} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  )
}

export default PokemonCard
