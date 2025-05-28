import * as S from './StoreInfo.style.tsx'
import type {storeList} from "../../types/types.ts";

type StoreInfoProps = {
    storeInfo: storeList
}

const StoreInfo = ({storeInfo}: StoreInfoProps) => {
    console.log(storeInfo)
    const {name, rating, reviews, deliveryTime, minOrder, purMethod} = storeInfo;

    return (
        <S.StoreDetailInfo>
            <S.StoreDetailName>{name}</S.StoreDetailName>
            <S.StoreDetailReviews>
                <img src='/public_assets/filled-star.svg' alt="star"/>
                {rating} 리뷰{reviews}
            </S.StoreDetailReviews>
            <S.StoreDetailOrder>
                <S.StoreDetailOrderInfo>
                    <div>결제방법</div>
                    <div>{purMethod}</div>
                </S.StoreDetailOrderInfo>
                <S.StoreDetailOrderInfo>
                    <div>최소주문</div>
                    <div>{minOrder}</div>
                </S.StoreDetailOrderInfo>
                <S.StoreDetailOrderInfo>
                    <div>배달시간</div>
                    <div>{deliveryTime}</div>
                </S.StoreDetailOrderInfo>
            </S.StoreDetailOrder>
        </S.StoreDetailInfo>
    );
};

export default StoreInfo;