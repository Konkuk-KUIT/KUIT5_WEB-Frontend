import * as S from './OrderFooter.style.tsx'

const OrderFooter = () => {

    return (
        <S.OrderFooterWrapper>
            <S.OrderPrice>
                <S.TotalPriceNav>총 주문금액</S.TotalPriceNav>
                <S.TotalPriceAmount>12,100원</S.TotalPriceAmount>
            </S.OrderPrice>
            <S.OrderButton>주문하기</S.OrderButton>
        </S.OrderFooterWrapper>
    )
}

export default OrderFooter