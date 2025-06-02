import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Header from "../common/Header";
import OrderBar from "../common/Orderbar";
import MenuItem from "../common/MenuItem";
import star from "../assets/images/star.svg";
import { useMenus } from "../hooks/useMenus";

const Main = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  max-width: 1080px;
  padding: 0 24px;
  margin-bottom: 100px;
`;
const StoreInfo = styled.div`
  border-bottom: 1px solid #e5e8eb;
  margin: 0 -28px;
  padding: 0 28px;
  & > .infoItem {
    color: #4e5968;
    line-height: 33px;
  }
  & > .storeName {
    font-weight: 700;
    font-size: 26px;
    color: #191f28;
  }
`;
const Content = styled.div`
  & > p {
    padding: 26px 0 11px;
    color: #6b7684;
    font-weight: 600;
  }
`;

function Store() {
  const location = useLocation();
  const { store, cateName } = location.state || {};
  const { menus, loading } = useMenus();

  const renderItems = () =>
    menus.map((m, idx) => <MenuItem key={idx} item={m} />);

  return (
    <Main>
      <Header />
      <StoreInfo>
        <p className="storeName">{store.name}</p>
        <p className="infoItem">
          <img src={star} alt="star" /> {store.rating} 리뷰
          {store.ratingTotal.toLocaleString()}
        </p>
        <p className="infoItem">결제방법 {store.paymethod}</p>
        <p className="infoItem">최소주문 {store.minOrder.toLocaleString()}원</p>
        <p className="infoItem">배달시간 {store.eta}</p>
      </StoreInfo>
      <Content>
        <p>{cateName}</p>
        {loading && <p>음식 가져오는 중~~</p>}
        <div>{renderItems()}</div>
      </Content>
      <OrderBar total={12100} />
    </Main>
  );
}

export default Store;
