import React from "react";
import "../style/index.css";

const Card = ({ image, flipped, onClick }) => {
  return (
    <div className={`card ${flipped ? "flipped" : ""}`} onClick={onClick}>
      <div className="card-inner">
        <div className="card-front">{image}</div>
        <div className="card-back"></div>
      </div>
    </div>
  );
};

export default Card;
