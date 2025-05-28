import React from 'react';
import * as S from '../components/shared/Home.styles';
import SectionHeader from '../components/Page_1/SectionHeader';
import DeliveryLocationHeader from '../components/Page_1/DeliveryLocationHeaderBase';
import FoodCategory from '../components/Page_1/FoodCategory';
import OrderFooter from '../components/Page_1/OrderFooter';

const Home = () => {
    return (
        <S.Wrapper >
            <S.DeliveryLocationHeaderWrapper>
                <DeliveryLocationHeader />
            </S.DeliveryLocationHeaderWrapper>

            <S.SectionHeaderWrapper>
                <SectionHeader />
            </S.SectionHeaderWrapper>

            <S.FoodCategoryWrapper>
                <FoodCategory />
            </S.FoodCategoryWrapper>

            <S.OrderFooterWrapper>
                <OrderFooter />
            </S.OrderFooterWrapper>
        </S.Wrapper>
    );
};

export default Home;
