import React from "react";
import styled from "styled-components";
import * as H from "../styles/Header.styles";
import arrowBackIcon from "../models/arrowBack.svg";

const StoresTemp = ({ stores }) => {
  const ingredients = stores.ingredients;
  const len = ingredients.length;
  const text = "담기";

  return (
    <StoresData>
      <StoresImg>
        <img
          src={stores.img}
          alt={stores.name}
          style={{ borderRadius: "8px" }}
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
      <div></div>
      <H.NormalText>
        <Count>
          <span>1개</span>
          <img src={arrowBackIcon} />
        </Count>
      </H.NormalText>
    </StoresData>
  );
};

const StoresData = styled.div`
  margin: 13px 13px 13px 13px;
  display: grid;
  grid-template-columns: 70px 200px 50px 45px;
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

const Count = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default StoresTemp;
