import React from 'react';

import Cards from './Cards';

import { CardsContainerStyled } from './CardsContainer_style';

function CardsContainer({cards,firstpick, secondpick, matchedCards, onCardClick}){
  return (
    <CardsContainerStyled>
        {cards.map((card, index) => {
        const isFlipped =
          matchedCards.includes(index) ||
          firstpick?.index === index ||
          secondpick?.index === index;

        return (
          <Cards
            key={index}
            card={card}
            isFlipped={isFlipped}
            onClick={() => onCardClick(card, index)}
          />
        );
      })}

    </CardsContainerStyled>
  );
};

export default CardsContainer;