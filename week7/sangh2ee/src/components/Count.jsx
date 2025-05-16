import React from 'react'

 const Count = ({matchedCount}) => {
  return (
    <div className="score-bar">
        <h3>맞힌 개수 : {matchedCount}/5</h3>
        {matchedCount===5&&<h3>정답입니다!</h3>}
    </div>
  );
};
export default Count;