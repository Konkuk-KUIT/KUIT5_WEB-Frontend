import React from 'react'
import { Link } from 'react-router-dom'
import BlueButton from './Button'
import styled from "styled-components"

const MainDiv = styled.div`
    background-color: white;
    align-items: center;
    justify-content: space-between;
    height: 77px;
    width: 342px;
    position: fixed;
    border-radius: 16px 16px 0 0 ;
    box-shadow: 0px -8px 16px 0 rgba(0,0,0,0.10);
    bottom: 0;
    display: flex;
    padding: 0 24px;
    font-family: "Pretendard";
    p{
        margin: 0;
    }
`;
const SubDiv = styled.div`
    display: flex;
    gap: 4px;
    flex-direction: column;
`


const Orderbar = () => {
    return (
        <MainDiv>
            <SubDiv>
                <p style={{fontWeight: "400",fontSize: "15px"}} id='price-title'>총 주문금액</p>
                <p style={{fontWeight: "600",fontSize: "17px"}} id='totalprice'>12,100원</p>
            </SubDiv>
            {/* <Link to='/store'> */}
                <BlueButton>주문하기</BlueButton>
            {/* </Link> */}
        </MainDiv>
    )
}

export default Orderbar
