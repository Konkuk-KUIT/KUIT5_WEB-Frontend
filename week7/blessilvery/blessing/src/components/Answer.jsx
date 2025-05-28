import React from "react";

const Answer = ({ correct }) => {
  return (
    <>
      <p>맞힌 개수 : {correct}/5</p>
      {correct === 5 && <p>정답입니다.</p>}
    </>
  );
};

export default Answer;
