import React from "react";
import { CardWrapper } from "./Card.styles";

export default function Card({ name, age }) {
  return (
    <CardWrapper>
      <div>이름 : {name}</div>
      <div>나이 : {age}</div>
    </CardWrapper>
  );
}
