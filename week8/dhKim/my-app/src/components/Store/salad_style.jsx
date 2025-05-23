import styled from "styled-components";

export const SaladContainer=styled.div`
    
    position:absolute;
    top:147px;
    width:390px;
    height:630px;
    overflow: scroll;
`;

export const SaladInfo=styled.div`

    display: flex;
    flex-direction: row;
    gap: 10px;
    width:390px;
    height:116px;
    position:relative;


`;

export const SaladTextContainer=styled.ul`
    list-style:none;
    display:flex;
    flex-direction:column;
    gap:5px;
    margin:0;
    padding:0;
    position: absolute;
    top:16px;
    left:95px;

`;
export const SaladStoreText=styled.li`

    font-family: Pretendard;
    font-weight: 600;
    font-size: 17px;
    line-height: 100%;
    letter-spacing: 0px;

`;

export const SaladStoreSubText=styled.li`
    font-family: Pretendard;
    font-weight: 500;
    font-size: 13px;
    line-height: 100%;
    letter-spacing: 0px;
`;