import {getStoreList} from "../apis/store-list.ts";
import StoreRankingCard from "../components/stores/StoreRankingCard.tsx";
import styled from "styled-components";
import {useEffect, useState} from "react";
import type {storeList} from "../types/types.ts";
import {useLocation} from "react-router-dom";

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

const Stores = () => {
    const [storeList, setStoreList] = useState<storeList[] | null>([]);

    const location = useLocation()
    const categoryName = location.state.categoryName || "category load failed";
    useEffect(()=>{
        getStoreList().then(
            setStoreList
        ).catch(console.error)
    }, [])

    return (
        <CategoryHeader>
            {categoryName}
            {
                storeList && storeList.map((store) => {
                    return (
                        <StoreRankingCard store={store} key={store.rank}/>
                    )
                })
            }
        </CategoryHeader>
    )
}

export default Stores