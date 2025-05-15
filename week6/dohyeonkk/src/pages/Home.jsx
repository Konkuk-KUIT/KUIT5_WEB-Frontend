import React from 'react'
import FoodButton from '../components/FoodButton'
import styled from "styled-components"
import Orderbar from '../components/Orderbar'


const TopBar = styled.div`
    height: 41px;
    display: block;
`


const MainContainter = styled.div`
    width: 390px;
    align-items: center;
    
`

const FoodTable = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    row-gap: 10px;
    column-gap: 9px;
    width: fit-content;
    height: fit-content;
    margin-left: 24px;
    margin-right: 24px;
    margin-top: 70px;
`


const MainTitle = styled.div`
    p{
        margin: 0;
    }
    
    font-family: "Pretendard";
    display: flex;
    flex-direction: column;
    padding: 25px 68px 4px 24px;
    gap: 13px;

    #main-title__q{
        font-size: 26px;
        font-weight: 700;
    }

    #main-title__add{
        font-size: 17px;
        font-weight: 500;
    }
`;


const Home = () => {
    return (
        <MainContainter>
            <TopBar>   
            </TopBar>

            <MainTitle>
                <p id='main-title__q'>오늘은 무엇을 먹을까요?</p>
                <p id='main-title__add'>한남중앙로 40길 (한남 빌리지)(으)로 배달 &gt; </p>
            </MainTitle>

            <FoodTable>
                <td id='food-table-card'><FoodButton src='/img/food1.svg' name="피자" /></td>
                <td id='food-table-card'><FoodButton src='/img/food2.svg' name="샐러드" /></td>
                <td id='food-table-card'><FoodButton src='/img/food3.svg' name="햄버거" /></td>

                <td id='food-table-card'><FoodButton src='/img/food4.svg' name="한식" /></td>
                <td id='food-table-card'><FoodButton src='/img/food5.svg' name="분식" /></td>
                <td id='food-table-card'><FoodButton src='/img/food6.svg' name="치킨" /></td>

                <td id='food-table-card'><FoodButton src='/img/food7.svg' name="초밥" /></td>
                <td id='food-table-card'><FoodButton src='/img/food8.svg' name="샌드위치" /></td>
                <td id='food-table-card'> <FoodButton src='/img/food9.svg' name="파스타" /></td>

                <td id='food-table-card'><FoodButton src='/img/food10.svg' name="디저트" /></td>
                <td id='food-table-card'><FoodButton src='/img/food11.svg' name="커피" /></td>
                <td id='food-table-card'><FoodButton src='/img/food12.svg' name="더보기" /></td>
            </FoodTable>


        <Orderbar/>


        </MainContainter>
    )
}

export default Home
