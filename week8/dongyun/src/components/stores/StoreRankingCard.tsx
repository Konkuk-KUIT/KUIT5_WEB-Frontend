import * as S from './StoreRankingCard.style.tsx'
import {useNavigate} from "react-router-dom";
import type {storeList} from "../../types/types.ts";

type StoreRankingCardProps = {
    store: storeList
}

const StoreRankingCard = ({store}:StoreRankingCardProps) =>{
    const navigate = useNavigate()
    const { rank, name, rating, reviews, deliveryTime, deliveryFee} = store;
    const goToStoreMenu = () => {
        navigate('/store/1')
    }
    return (
        <S.StoreCard onClick={goToStoreMenu}>
            <S.StoreImage/>

            <S.StoreInfo>
                { rank > 3 ? null : <S.StoreRank>{rank}위</S.StoreRank> }
                <S.StoreName>{name}</S.StoreName>
                <S.StoreReviews>
                    <img src='/public_assets/blanked-star.svg'  alt="star"/> {rating} ({reviews})</S.StoreReviews>
                <S.StoreDelivery>{deliveryTime} ∙ 배달비 {deliveryFee}원 </S.StoreDelivery>
            </S.StoreInfo>
        </S.StoreCard>
    )
}

export default StoreRankingCard;