import React from "react";
import * as S from "./Stores.styles";
import BottomOrderBar from "../components/BottomOrderBar";
import Title from "../components/Title";
import GoBack from "../components/GoBack";
import star from "../img/star.svg";
import MenuList from "../components/MenuList";
import MenuContentList from "../models/MenuContentList";
import { useNavigate } from "react-router-dom";

const Store = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/store");
  };
  return (
    <>
      <GoBack onClick={handleClick} />
      <S.Header>
        <Title value="샐로리 한남점" />
      </S.Header>
      <S.review>
        <img src={star} alt="별" />
        4.9 리뷰3,919
      </S.review>
      <S.navStyle>결제방법 토스결제만 현장결제 안됨</S.navStyle>
      <S.navStyle>최소주문 13,000원</S.navStyle>
      <S.navStyle>배달시간 약 15-25분</S.navStyle>
      <S.BarStyle>샐러드</S.BarStyle>
      {MenuContentList.map((item, index) => (
        <MenuList
          key={index}
          MenuName={item.MenuName}
          Price={item.Price}
          Material={item.Material}
        />
      ))}
      <BottomOrderBar />
    </>
  );
};

export default Store;
