import * as S from './CartCard.style.tsx';
import type {cartItem} from "../../types/types.ts";

type CartCardProps = {
    cartItem: cartItem
}

const CartCard = ({cartItem}:CartCardProps) => {
    const editItem = () =>{
        fetch(`http://localhost:3001/cart-list/${cartItem.id}`, {
            method:"PATCH",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                count: 99
            })
        }).then(res => {
            console.log(res.json())
        }).catch(error => {
            console.log(error);
        });
    }

    const deleteItem = () => {
        console.log(`http://localhost:3001/cart-list/${cartItem.id}`)
        fetch(`http://localhost:3001/cart-list/${cartItem.id}`, {
            method:"DELETE",
            headers: {'Content-Type': 'application/json'},
        }).then(res => {
            console.log(res.json())
        }).catch(error => {
            console.log(error);
        });
    }
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
                    <p onClick={editItem}>수정</p>
                    <p onClick={deleteItem}>삭제</p>
                </S.CartMenuOption>
            </S.CountOption>
        </S.CartCard>
    );
};

export default CartCard;
