import CartCard from "../components/cart/CartCard.tsx";
import * as S from "../components/cart/Cart.style.tsx"

const Cart = () => {
    return (
        <>
            <S.Seperator/>
            <S.StoreCartHeader>
                <S.StoreCartName>
                    샐로리 한남점
                </S.StoreCartName>
                <S.WarningMinOrder>
                    최소금액 미달 <S.WarningMinOrderIcon src="/public_assets/warning-icon.svg"/>
                </S.WarningMinOrder>
            </S.StoreCartHeader>

            <CartCard/>

            <S.AddMoreCart>
                더담기 <S.AddMoreCartIcon src="/public_assets/blue-plus-icon.svg"/>
            </S.AddMoreCart>

            <S.Seperator/>

            <S.CostInfoSet>
                <S.CostOrder>
                    <S.CostItem>
                        주문금액
                    </S.CostItem>
                    <S.CostAmount>
                        10,600원
                    </S.CostAmount>
                </S.CostOrder>

                <S.CostOrder>
                    <S.CostItem>
                        배달요금
                    </S.CostItem>
                    <S.CostAmount>
                        2,000원
                    </S.CostAmount>
                </S.CostOrder>

                <S.TotalCostOrder>
                    <S.TotalCostItem>
                        총 결제금액
                    </S.TotalCostItem>
                    <S.TotalCostAmount>
                        12,600원
                    </S.TotalCostAmount>
                </S.TotalCostOrder>

            </S.CostInfoSet>

            <S.NavMinOrder>
                최소 주문금액 13,000원
            </S.NavMinOrder>
            <S.PurchaseButton>12,600원 결제하기</S.PurchaseButton>
        </>
    )
}

export default Cart