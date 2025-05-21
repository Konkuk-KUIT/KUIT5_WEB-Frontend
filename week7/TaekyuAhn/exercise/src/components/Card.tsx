import React from "react";

type Props = {
  name: string;
  age: number;
};

const Card = ({ name, age }: Props) => {
  return (
    <div>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  );
};

export default Card;
