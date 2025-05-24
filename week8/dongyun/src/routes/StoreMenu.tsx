import styled from "styled-components";
import StoreMenuCard from "../components/store-menu/StoreMenuCard.tsx";
import StoreInfo from "../components/store-menu/StoreInfo.tsx";
import {useEffect, useState} from "react";
import type {storeMenu} from "../types/types.ts";
import {getStoreMenu} from "../apis/store-menu.ts";
import {useLocation} from "react-router-dom";

const MenuCategoryName = styled.div`
    color: #6B7684;
    font-size: 17px;
    font-family: Pretendard;
    font-weight: 600;
    word-wrap: break-word;
    padding: 26px 321px 11px 24px;
`

const StoreMenuPage = () =>{
    const location = useLocation()
    const storeInfo = location.state?.storeInfo
    console.log(storeInfo)
    const [menuList, setMenuList] = useState<storeMenu[]|null>([]);
    useEffect(()=>{
        getStoreMenu().then(setMenuList).catch(console.error);
    }, [])

    return (
        <>
            <StoreInfo storeInfo={storeInfo ? storeInfo : "가게 정보 로딩 실패"}/>
            <MenuCategoryName>{storeInfo ? storeInfo.category : "가게 정보 로딩 실패"}</MenuCategoryName>
            {
                menuList && menuList.map((salad) => {
                    return (
                        <StoreMenuCard menu={salad} key={salad.name}/>
                    )
                })
            }
        </>
    )
}

export default StoreMenuPage