import React, { useState } from "react";
import Category from "../components/Category";
import OrderBar from "../components/OrderBar";
import * as C from "../components/Category.styles";
import * as H from "../styles/Header.styles";
import * as S from "../styles/Home.styles";

const Home = () => {
  const [category, setCategory] = useState([
    { img: "https://placehold.co/30x30", category: "피자" },
    { img: "https://placehold.co/30x30", category: "샐러드" },
    { img: "https://placehold.co/30x30", category: "햄버거" },
    { img: "https://placehold.co/30x30", category: "한식" },
    { img: "https://placehold.co/30x30", category: "분식" },
    { img: "https://placehold.co/30x30", category: "치킨" },
    { img: "https://placehold.co/30x30", category: "초밥" },
    { img: "https://placehold.co/30x30", category: "샌드위치" },
    { img: "https://placehold.co/30x30", category: "파스타" },
    { img: "https://placehold.co/30x30", category: "디저트" },
    { img: "https://placehold.co/30x30", category: "커피" },
    { img: "https://placehold.co/30x30", category: "더보기" },
  ]);

  return (
    <S.Page style={{ padding: 0 }}>
      <H.HeaderTitle>
        <H.MainText>
          <div style={{ margin: 0, paddingBottom: 13 }}>
            오늘은 무엇을 먹을까요?
          </div>
        </H.MainText>
        <H.SubText>
          <p style={{ margin: 0 }}>
            한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt;
          </p>
        </H.SubText>
      </H.HeaderTitle>
      <S.Main>
        <C.CategoryForm>
          {category.map((item) => (
            <Category
              key={item.category}
              image={item.img}
              label={item.category}
            />
          ))}
        </C.CategoryForm>
      </S.Main>
      <OrderBar />
    </S.Page>
  );
};

export default Home;
