import React from "react";
import OrderBar from "../components/OrderBar";
import { Link } from "react-router-dom";
import foodcategories from "../models/foodcategories";
import {
  Screen,
  Title,
  SubTitle,
  CategoryGrid,
  CategoryItem,
  CategoryName,
  CategoryIcon,
} from "../styles/HomeStyles";

const Home = () => {
  return (
    <Screen>
      <Title>오늘은 무엇을 먹을까요?</Title>
      <SubTitle>한남중앙로 40길 (한남 빌리지)(으)로 배달</SubTitle>

      <CategoryGrid>
        {foodcategories.map((category) => (
          <Link key={category.name} to={category.path} className="CategoryBox">
            <CategoryItem>
              <CategoryIcon src={category.img} alt={category.name} />
              <CategoryName>{category.name}</CategoryName>
            </CategoryItem>
          </Link>
        ))}
      </CategoryGrid>
      <div>
        <OrderBar />
      </div>
    </Screen>
  );
};

export default Home;
