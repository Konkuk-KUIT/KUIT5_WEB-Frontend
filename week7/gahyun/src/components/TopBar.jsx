import React from "react";

const TopBar = ({ count, total }) => {
  return (
    <div>
      <div>맞힌 개수: {count}</div>
      {count === total && <div>정답입니다.</div>}
      {/* 조건&&표현식 형태 */}
    </div>
  );
};

export default TopBar;
