import React from 'react'

const StoreDeletebtn = ({onDelete}) => {
  return (
    <button style={{width:"60px",height:"40px"}} type="button" onClick={onDelete} >삭제하기</button>
  );
};

export default StoreDeletebtn;