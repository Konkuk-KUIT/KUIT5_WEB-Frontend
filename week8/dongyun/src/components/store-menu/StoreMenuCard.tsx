import * as S from './StoreMenuCard.style.tsx'
import {useNavigate} from "react-router-dom";
import type {storeMenu} from "../../types/types.ts";

type StoreMenuCardProps = {
    menu : storeMenu
}

const StoreMenuCard = ({menu} : StoreMenuCardProps) =>{
    const { name, price, isBest, ingredients} = menu;
    const navigate = useNavigate()
    const handleClick = () =>{
        navigate('/cart')
    }

    return (
        <S.StoreMenuCardWrapper>
            <S.StoreMenuImage />
            <S.StoreMenuInfo>
                <div>
                    <S.StoreMenuName>{name}</S.StoreMenuName>
                    {isBest && <S.StoreMenuIsBest>BEST</S.StoreMenuIsBest>}
                </div>
                <S.StoreMenuPrice>{price}원</S.StoreMenuPrice>
                <S.StoreMenuIngred>{ingredients}</S.StoreMenuIngred>
            </S.StoreMenuInfo>
            <S.AddToCart onClick={(e) => { e.stopPropagation(); handleClick(); }}>
                담기
            </S.AddToCart>
        </S.StoreMenuCardWrapper>
    );
}

export default StoreMenuCard