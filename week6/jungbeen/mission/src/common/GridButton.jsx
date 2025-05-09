import styled from "styled-components";
import pizza from "../assets/images/pizza.svg";
import chicken from "../assets/images/chicken.svg";
import coffee from "../assets/images/coffee.svg";
import dessert from "../assets/images/dessert.svg";
import flourFood from "../assets/images/flourFood.svg";
import hamburger from "../assets/images/hamburger.svg";
import koreanFood from "../assets/images/koreanFood.svg";
import pasta from "../assets/images/pasta.svg";
import salad from "../assets/images/salad.svg";
import sandwitch from "../assets/images/sandwitch.svg";
import sushi from "../assets/images/sushi.svg";

const Button = styled.button`
  background-color: #fafafb;
  height: 74px;
  display: flex;
  flex-direction: column;
  border: none;
  border-radius: 8px;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

function GridButton({ cateName, imgSrc = null, idx }) {
  const temp = [
    pizza,
    chicken,
    coffee,
    dessert,
    flourFood,
    hamburger,
    koreanFood,
    pasta,
    salad,
    sandwitch,
    sushi,
    sushi,
  ];
  return (
    <Button>
      <img
        style={{ width: "28px", height: "28px" }}
        src={temp[idx]}
        alt={imgSrc}
      />
      <span>{cateName}</span>
    </Button>
  );
}

export default GridButton;
