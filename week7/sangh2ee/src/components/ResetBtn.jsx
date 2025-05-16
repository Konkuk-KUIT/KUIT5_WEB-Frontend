import React from 'react'

const ResetBtn = ({shuffleCards}) => {
  return (
    <button onClick={shuffleCards}>
        Start/Reset Cards
    </button>
  );
};


export default ResetBtn;
