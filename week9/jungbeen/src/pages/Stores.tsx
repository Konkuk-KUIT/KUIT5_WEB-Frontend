import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { useState } from "react";

import Header from "../common/Header";
import OrderBar from "../common/Orderbar";
import StoresItem from "../common/StoresItem";
import AddStoreBar from "../common/AddStoreBar";
import addImg from "../assets/images/add.svg";

import { useStores } from "../hooks/useStores";

const Category = styled.div`
  font-size: 26px;
  font-weight: bold;
`;
const Main = styled.div`
  margin: 0 auto;
  margin-top: 88px;
  max-width: 1080px;
  padding: 0 24px;
`;
const Contents = styled.div`
  margin-top: 50px;
`;
const AddButton = styled.button`
  margin-bottom: 150px;
  width: 100%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  & > img {
    width: 100px;
    height: 100px;
  }
`;

function Stores() {
  const location = useLocation();
  const { cateName } = location.state || {};
  const { stores, loading, editStore, deleteStore, addStore } = useStores();
  const [isadding, setIsadding] = useState(false);

  const renderRows = () =>
    stores.map((store, idx) => (
      <StoresItem
        key={idx}
        store={store}
        cateName={cateName}
        editStore={editStore}
        deleteStore={deleteStore}
      />
    ));

  return (
    <Main>
      <Header />
      <Category>{cateName}</Category>
      {loading && <p>맛집 찾는 중~~</p>}
      <Contents>{renderRows()}</Contents>
      {isadding ? (
        <AddStoreBar
          setIsadding={setIsadding}
          addStore={addStore}
        ></AddStoreBar>
      ) : (
        <AddButton
          onClick={() => {
            setIsadding(true);
          }}
        >
          <img src={addImg} alt="add" />
        </AddButton>
      )}

      <OrderBar total={12100} />
    </Main>
  );
}

export default Stores;
