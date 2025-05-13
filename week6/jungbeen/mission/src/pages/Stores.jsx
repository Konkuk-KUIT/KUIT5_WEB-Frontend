import styled from "styled-components";
import { useLocation } from "react-router-dom";

import Header from "../common/Header";
import OrderBar from "../common/OrderBar";
import { stores } from "../models/stores";
import StoresItem from "../common/StoresItem";

const Category = styled.div`
  font-size: 26px;
  font-weight: bold;
`;
const Main = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  min-width: 412px;
  max-width: 1080px;
  padding: 0 24px;
`;
const Contents = styled.div`
  margin-bottom: 100px;
  margin-top: 50px;
`;

function Stores() {
  const location = useLocation();
  const { cateName } = location.state || {};
  const renderRows = () =>
    stores.map((store) => <StoresItem store={store} cateName={cateName} />);

  return (
    <Main>
      <Header />
      <Category>{cateName}</Category>
      <Contents>{renderRows()}</Contents>
      <OrderBar total={12100} />
    </Main>
  );
}

export default Stores;
