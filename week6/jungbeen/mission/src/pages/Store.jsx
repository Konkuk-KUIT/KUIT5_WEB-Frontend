import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Header from "../common/Header";
import OrderBar from "../common/OrderBar";
import { menu } from "../models/stores";
import MenuItem from "../common/MenuItem";
import star from "../assets/images/star.svg";

const Main = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  min-width: 412px;
  max-width: 1080px;
  padding: 0 24px;
  margin-bottom: 100px;
`;
const StoreInfo = styled.div`
  border-bottom: 1px solid #e5e8eb;
  margin: 0 -28px;
  padding: 0 28px;
  & p {
    color: #4e5968;
    line-height: 33px;
  }
`;
const Content = styled.div``;

function Store() {
  const location = useLocation();
  const { store, cateName } = location.state || {};

  const renderItems = () =>
    menu.map((m, idx) => <MenuItem key={idx} item={m} />);

  return (
    <Main>
      <Header />
      <StoreInfo>
        <p style={{ fontWeight: "700", fontSize: "26px", color: "#191F28" }}>
          {store.name}
        </p>
        <p>
          <img src={star} alt="star" /> {store.rating} 리뷰
          {store.ratingTotal.toLocaleString()}
        </p>
        <p>결제방법 {store.paymethod}</p>
        <p>최소주문 {store.minOrder.toLocaleString()}원</p>
        <p>배달시간 {store.eta}</p>
      </StoreInfo>
      <Content>
        <p
          style={{
            padding: "26px 0 11px",
            color: "#6b7684",
            fontWeight: "600",
          }}
        >
          {cateName}
        </p>
        <div>{renderItems()}</div>
      </Content>
      <OrderBar total={12100} />
    </Main>
  );
}

export default Store;
