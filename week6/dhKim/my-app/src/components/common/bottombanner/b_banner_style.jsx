import styled from "styled-components";

export const BottomContainer=styled.div`
  width: 390px;
  height: 111px;
  border-radius: 16px 16px 0 0;
  display: flex;
  box-sizing: border-box;
  background-color: white;
  align-items: center;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -8px 16px 0px #0000001A;
`;

export const BottomPrice=styled.div`
    font-size: 17px;
    font-weight: bold;
    margin: 0;
    padding:0;
    position: absolute;
    top:15px;
    left: 24px;
    
`;

export const OrderButton=styled.button`
    width: 84px;
    height: 38px;
    position:absolute;
    top: 19px;
    left: 282px;
    border-radius: 8px;
    background: #3182F6;
   
    color:white;
    border: none;
`;