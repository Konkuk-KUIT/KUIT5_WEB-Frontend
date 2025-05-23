import * as S from './CartCard.style.tsx';

const CartCard = () => {
    return (
        <S.CartCard>
            <S.CartImage />
            <S.CartInfo>
                <S.CartMenuName>토마토 샐러드</S.CartMenuName>
                <S.CartMenuIngred>추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</S.CartMenuIngred>
                <S.CartMenuIngred>10,600원</S.CartMenuIngred>
            </S.CartInfo>
            <S.CountOption>
                <S.CartMenuCount>1개</S.CartMenuCount>
                <S.CartMenuOption>
                    <img src="/public_assets/arrow-front-icon.svg" alt="더보기" />
                </S.CartMenuOption>
            </S.CountOption>
        </S.CartCard>
    );
};

export default CartCard;
