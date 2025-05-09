import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { category } from "../models/stores";
import GridButton from "../common/GridButton";
import OrderBar from "../common/OrderBar";

const Main = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  min-width: 412px;
  max-width: 1080px;
  padding: 0 24px;
`;
const Title = styled.p`
  font-weight: bold;
  font-size: 26px;
`;
const TitleContainer = styled.div`
  margin-bottom: 74px;
`;
const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  gap: 9px;
  max-width: 100%;
  margin: 0 auto;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Home() {
  const renderButtons = () =>
    category.map((c, idx) => (
      <StyledLink to="/store" state={{ cateName: c.name }}>
        <GridButton key={idx} cateName={c.name} imgSrc={c.imgName} idx={idx} />
      </StyledLink>
    ));
  return (
    <Main>
      <TitleContainer>
        <Title style={{ marginBottom: "13px" }}>오늘은 무엇을 먹을까요?</Title>
        <p>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</p>
      </TitleContainer>
      <CategoryGrid>{renderButtons()}</CategoryGrid>
      <OrderBar total={12100} />
    </Main>
  );
}

export default Home;
