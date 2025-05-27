import React from "react";
import { motion } from "framer-motion";
import { Card } from "../data"; 

interface FlipCardProps {
  card: Card;
  isFlipped: boolean;
  onClick: () => void;
}

function FlipCard ({ card, isFlipped, onClick }: FlipCardProps) {
  const BACK_IMG_PATH = "/assets/back.png";

  return (
    <motion.div
      onClick={onClick}
      style={{
        width: "120px",
        height: "170px",
        perspective: 1000,
        cursor: "pointer",
      }}
    >
      <motion.div
        initial={{ rotateY: 0 }}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{
          width: "100%",
          height: "100%",
          transformStyle: "preserve-3d",
          position: "relative",
        }}
      >
        <img
          src={BACK_IMG_PATH}
          alt="back"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        />
        <img
          src={card.img}
          alt={card.name}
          style={{
            transform: "rotateY(180deg)",
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default FlipCard;