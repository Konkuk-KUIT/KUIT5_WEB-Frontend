import React from 'react'

const Card = ({card, handleChoice, flipped, disabled}) => {
    const handleClick = () => {
        if (!disabled && !flipped){
            handleChoice(card);
        }
    };

    return(
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img className="front" src={`/assets/${card.src}`} alt="card front" />
                <img className="back" src="/assets/card.svg" onClick={handleClick} alt="card back" />
                </div>
        </div>
    );


}

export default Card;