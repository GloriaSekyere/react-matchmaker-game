import React from 'react';
import './SingleCard.css';

const SingleCard = ({ card, handleChoice, flipped }) => {

  const handleClick = () => {
    handleChoice(card)
  }

  return (
    <div className={flipped ? "flipped" : ""}>
      <img className='front' src={card.src} alt="card front" />
      <img 
        className='back' 
        src="/img/cover.png" 
        alt="card back"
        onClick={handleClick}
      />
    </div>
  )
}

export default SingleCard