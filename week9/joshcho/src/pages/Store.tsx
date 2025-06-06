import React, { useState, useEffect } from "react";
import * as S from "./Stores.styles";
import BottomOrderBar from "../components/BottomOrderBar";
import Title from "../components/Title";
import GoBack from "../components/GoBack";
import star from "../img/star.svg";
import MenuList from "../components/MenuList";
import { useNavigate } from "react-router-dom";

// 메뉴 아이템 타입 정의
interface MenuItem {
  MenuName: string;
  Price: string;
  Material: string;
}

const Store = () => {
  const navigate = useNavigate();
  const [menus, setMenus] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<globalThis.Error | null>(null);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const response = await fetch("http://localhost:3001/menus");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: MenuItem[] = await response.json();
        setMenus(data);
      } catch (error) {
        console.error("메뉴 목록을 가져오는 데 실패했습니다:", error);
        setError(error as globalThis.Error);
      } finally {
        setLoading(false);
      }
    };

    fetchMenus();
  }, []);

  const handleClick = () => {
    navigate("/store");
  };

  if (loading) {
    return <p>메뉴 목록 로딩 중...</p>;
  }

  if (error) {
    return <p>메뉴 목록을 불러오는 데 오류가 발생했습니다: {error.message}</p>;
  }

  return (
    <>
      <S.Header style={{ display: "flex", alignItems: "center" }}>
        <GoBack onClick={handleClick} />
        <Title value="샐로리 한남점" />
      </S.Header>
      <div style={{ paddingTop: "87px", paddingBottom: "100px" }}>
        <S.review>
          <img src={star} alt="별" />
          4.9 리뷰3,919
        </S.review>
        <S.navStyle>결제방법 토스결제만 현장결제 안됨</S.navStyle>
        <S.navStyle>최소주문 13,000원</S.navStyle>
        <S.navStyle>배달시간 약 15-25분</S.navStyle>
        <S.BarStyle>샐러드</S.BarStyle>
        {menus.length === 0 ? (
          <p>메뉴 목록이 비어있습니다.</p>
        ) : (
          menus.map((item, index) => (
            <MenuList
              key={index}
              MenuName={item.MenuName}
              Price={item.Price}
              Material={item.Material}
            />
          ))
        )}
      </div>

      <BottomOrderBar />
    </>
  );
};

export default Store;
