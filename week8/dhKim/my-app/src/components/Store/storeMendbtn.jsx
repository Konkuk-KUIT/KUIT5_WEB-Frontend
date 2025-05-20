import React from 'react';

const StoreMendbtn = ({onClick}) => {
  return (
    <button style={{width:"60px",height:"40px"}}type='button' onClick={onClick}>수정하기</button>
  );
};

export default StoreMendbtn;