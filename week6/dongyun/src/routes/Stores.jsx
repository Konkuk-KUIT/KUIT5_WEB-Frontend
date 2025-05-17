import {storeList} from "../models/stores.js"
import StoreRankingCard from "../components/StoreRankingCard.jsx";
import styled from "styled-components";

const CategoryHeader = styled.div`
    width: 390px;
    height: 630px; 
    position: relative;
    overflow-y: hidden;
    color: #191F28;
    font-family: Pretendard;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding: 26px 290px 2px 24px;
`

const Stores = ({category}) => {

    return (
        <CategoryHeader>
            {category}
            {
                storeList.map((store) => {
                    return (
                        <StoreRankingCard store={store} key={store.rank}/>
                    )
                })
            }

        </CategoryHeader>
    )
}

export default Stores