import React from "react";
import OrderBar from "../components/OrderBar";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import marketcategories from "../models/marketcategories";
import {
  Top,
  Back,
  MarketList,
  Market,
  StoreInfo,
  CategoryImg,
  StoreTitle,
  StoreSubTitle,
} from "../styles/StoresStyles";
import { Title } from "../styles/HomeStyles";

const Stores = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Top>
        <Back onClick={() => navigate(-1)}>
          <img src="/images/categories/back.svg" alt="뒤로가기" />
        </Back>
      </Top>
      <Title>샐러드</Title>

      <MarketList>
        {marketcategories.map((category) => (
          <Market>
            <Link
              key={category.name}
              to={category.path}
              className="category-item"
            >
              <CategoryImg src={category.img} alt={category.name} />
              <StoreInfo>
                {category.rank && <StoreTitle>{category.rank}위</StoreTitle>}

                <StoreTitle>{category.name}</StoreTitle>
                <StoreSubTitle>
                  ⭐ {category.rating} ({category.reviewCount})
                </StoreSubTitle>
                <StoreSubTitle>
                  {category.deliveryTime} · 배달비 {category.deliveryFee}
                </StoreSubTitle>
              </StoreInfo>
            </Link>
          </Market>
        ))}
      </MarketList>
      <div>
        <OrderBar />
      </div>
    </div>
  );
};

export default Stores;
