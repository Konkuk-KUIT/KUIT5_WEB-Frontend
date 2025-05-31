import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import * as H from "../styles/Header.styles";

// img: "https://placehold.co/54x54",
// name: "토마토 샐러드",
// price: 7600,
// ingredients: ["계란", "옥수수", "양파", "올리브", "베이컨", "시저드레싱"],
// isBest: true,

const StoresDetail = ({ stores }) => {
  const ingredients = stores.ingredients;
  const len = ingredients.length;
  const text = "담기";

  return (
    <StoresData>
      <StoresImg>
        <img
          src={stores.img}
          alt={stores.name}
          style={{ borderRadius: "27px" }}
        />
      </StoresImg>
      <StoresText>
        <H.SubText style={{ fontWeight: "600" }}>
          {stores.name}
          {"  "}
          <span style={{ color: "#3182F6" }}>
            {stores.isBest ? "BEST" : ""}
          </span>
        </H.SubText>
        <H.NormalText>
          <div style={{ marginBottom: "3px" }}>
            {stores.price}
            {"원"}
          </div>
          <div>
            {ingredients.map((item, index) => (
              <span key={index}>
                {item}
                {index < len - 1 ? ", " : ""}
              </span>
            ))}
          </div>
        </H.NormalText>
      </StoresText>
      <Button text={text} />
    </StoresData>
  );
};

const StoresData = styled.div`
  margin: 13px 13px 13px 13px;
  display: grid;
  grid-template-columns: 70px 200px 95px;
  align-items: center;
  height: 116px;
`;

const StoresText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 16px 10px 16px 10px;
`;

const StoresImg = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  margin: 16px 7px 16px 10px;
  border-radius: 8px;
`;

export default StoresDetail;
