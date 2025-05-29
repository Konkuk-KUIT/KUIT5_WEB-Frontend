import CartCard from "../components/cart/CartCard.tsx";
import * as S from "../components/cart/Cart.style.tsx"
import {useEffect, useState} from "react";
import {getCartList} from "../apis/cart-list.ts";
import type {cartItem} from "../types/types.ts";

const Cart = () => {
    const [cartList, setCartList] = useState<cartItem[]>([])
    const [isAdding, setIsAdding] = useState(false);

    useEffect(() => {
        getCartList().then(setCartList).catch(console.error);
    }, [cartList]);

    const [itemName, setItemName] = useState('');
    const [itemIngred, setITemIngred] = useState('');
    const [itemID, setItemID] = useState<number | ''>('');

    const handleClick = async () => {
        const res = await fetch('http://localhost:3001/cart-list', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: itemName,
                ingredients: itemIngred,
                id: itemID,
                count: 1
            })
        });
        const newCart = await res.json();
        setCartList((prev) => [...prev, newCart]);
        setItemName('')
        setITemIngred('')
        setItemID(0)
        setIsAdding(false)
        return await res.json();
    }

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

            {/*fetch하는 컴포넌트*/}
            {cartList.map((cartItem)=>{
                return (
                    <CartCard cartItem={cartItem}/>
                )
            })}

            <S.AddMoreCart onClick={()=>{
                setIsAdding(!isAdding)
            }}>
                더담기 <S.AddMoreCartIcon src="/public_assets/blue-plus-icon.svg"/>
            </S.AddMoreCart>

            {isAdding ? (
                <S.AddingContainer>
                    <S.InputContainer>
                        <S.ItemCountInput
                            type="number"
                            placeholder="카트에 담을 아이템 ID 입력"
                            value={itemID}
                            onChange={(e) => setItemID(e.target.value === '' ? '' : Number(e.target.value))}
                        />
                        <S.ItemNameInput
                            type="text"
                            placeholder="카트에 담을 음식 이름 입력"
                            value={itemName}
                            onChange={(e) => setItemName(e.target.value)}
                        />
                        <S.ItemIngredInput
                            type="text"
                            placeholder="카트에 담을 재료 목록 입력"
                            value={itemIngred}
                            onChange={(e) => setITemIngred(e.target.value)}
                        />

                    </S.InputContainer>
                    <S.AddCartButton onClick={handleClick}>담기</S.AddCartButton>
                </S.AddingContainer>
            ) : null}

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