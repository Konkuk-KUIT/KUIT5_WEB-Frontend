import {storeList, saladMenu} from "../models/stores.js";
import StoreMenuCard from "./StoreMenuCard.jsx";
import StoreInfo from "./StoreInfo.jsx";
import styled from "styled-components";

const MenuCategoryName = styled.div`
    color: #6B7684;
    font-size: 17px;
    font-family: Pretendard;
    font-weight: 600;
    word-wrap: break-word;
    padding: 26px 321px 11px 24px;
`

const StoreMenuPage = () =>{

    return (
        <div>
            <StoreInfo storeInfo={storeList[0]}/>
            <MenuCategoryName>샐러드</MenuCategoryName>
            {
                saladMenu.map((salad) => {
                    console.log(salad)
                    return (
                        <StoreMenuCard menu={salad} key={salad.name}/>
                    )
                })
            }

        </div>
    )
}

export default StoreMenuPage