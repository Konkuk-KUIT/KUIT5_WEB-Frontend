import * as S from './CartCard.style.tsx';
import type {cartItem} from "../../types/types.ts";

type CartCardProps = {
    cartItem: cartItem
}

const CartCard = ({cartItem}:CartCardProps) => {
    return (
        <S.CartCard>
            <S.CartImage />
            <S.CartInfo>
                <S.CartMenuName>{cartItem.name}</S.CartMenuName>
                <S.CartMenuIngred>{cartItem.ingredients}</S.CartMenuIngred>
                <S.CartMenuIngred>10,600원</S.CartMenuIngred>
            </S.CartInfo>
            <S.CountOption>
                <S.CartMenuCount>{cartItem.count}개</S.CartMenuCount>
                <S.CartMenuOption>
                    <img src="/public_assets/arrow-front-icon.svg" alt="더보기" />
                </S.CartMenuOption>
            </S.CountOption>
        </S.CartCard>
    );
};

export default CartCard;
