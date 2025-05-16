import React from "react";

const BottomBar = ({ onReset }) => {
  return (
    <div>
      <button onClick={onReset}>Start/Reset Cards</button>
      {/* <input type="button" value="Start/Reset Cards" /> */}
    </div>
  );
};

export default BottomBar;
