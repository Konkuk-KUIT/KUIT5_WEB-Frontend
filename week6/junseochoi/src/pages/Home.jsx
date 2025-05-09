import React from "react";
import Title from "../components/Title";
import Rectangle from "../components/Rectangle";
import * as H from "./Home.styles";
import RectangleList from "../models/RectangleList";
import BottomOrderBar from "../components/BottomOrderBar";

const Home = () => {
  return (
    <>
      <H.Header>
        <Title value="오늘은 무엇을 먹을까요?" />
        <H.SubTitle>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;</H.SubTitle>
      </H.Header>
      <H.RectangleDiv>
        {RectangleList.map((item, index) => (
          <Rectangle key={index} img_src={item.img_src} value={item.value} />
        ))}
      </H.RectangleDiv>
      <BottomOrderBar />
    </>
  );
};

export default Home;
