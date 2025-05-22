import React from 'react';

const FlipCard = ({ image, index, flipped, onFlip }) => {
  const handleClick = () => {
    if (!flipped) {
      onFlip(index, image);
    }
  };

  const cardStyle = {
    width: "180px",
    height: "180px",
    perspective: "1000px",
    cursor: "pointer",
  };

  const innerStyle = {
    position: "relative",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s",
    transformStyle: "preserve-3d",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const sideStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "8px",
    backfaceVisibility: "hidden",
  };

  const frontStyle = {
    ...sideStyle,
    backgroundColor: "black",
  };

  const backStyle = {
    ...sideStyle,
    transform: "rotateY(180deg)",
    backgroundColor: "white",
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "8px",
  };

  return (
    <div style={cardStyle} onClick={handleClick}>
      <div style={innerStyle}>
        <div style={frontStyle} />
        <div style={backStyle}>
          <img src={image} alt="card" style={imgStyle} />
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
