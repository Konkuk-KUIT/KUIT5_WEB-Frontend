import model from "./models/MarketModel";
import React from "react";

const Header = ({ model }) => {
  return (
    <div style={{ fontSize: "10px" }}>
      <h1>{model.location}</h1>
    </div>
  );
};

const Content = ({ modelList }) => {
  return (
    <div>
      {modelList.map((item, idx) => (
        <div key={idx}>
          <ol>{item.image}</ol>
          <div>
            <ol>{item.title}</ol>
            <ol>
              <span>{item.location} · </span>
              <span>{item.timeAgo}</span>
            </ol>
            <ol>{item.price}</ol>
            <div>
              <span>{item.comments} </span>
              <span>{item.likes}</span>
            </div>
            <div> -----------------------------------</div> {/*공백?*/}
          </div>
        </div>
      ))}
    </div>
  );
};
const BottomNav = ({ modelList }) => {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <span>홈</span>
      <span>동네생활</span>
      <span>내 근처</span>
      <span>채팅</span>
      <span>나의 당근</span>
    </div>
  );
};

const Home = () => {
  const modelList = model.items.filter((value) => value.isSold === true);
  return (
    <div>
      <Header model={model} />
      <Content modelList={modelList} />
      <BottomNav modelList={modelList} />
    </div>
  );
};

export default Home;
