import React from "react";

const IconButton = ({ src, alt, className }) => {
  return (
    <button type="button" className={className}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default IconButton;
