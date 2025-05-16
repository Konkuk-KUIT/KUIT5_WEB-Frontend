import React from 'react';

const Topbanner = ({count}) => {
    //count를 state로 관리할 예정...
  return (
    <div>
        <p>점수{count}/5 점</p>
    </div>
  );
};

export default Topbanner;