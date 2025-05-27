import React from "react";

export default function Score({ score }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        justifyContent: "center",
        padding: "20px",
        margin: "0 auto",
        fontWeight: "bold",
      }}
    >
        <div>맞힌 개수 : {score}/5</div>
    </div>
  );
}
