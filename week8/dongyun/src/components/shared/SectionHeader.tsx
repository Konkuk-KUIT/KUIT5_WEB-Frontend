import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import * as S from './SectionHeader.style.tsx'
const SectionHeader = () => {
    let location  = useLocation()
    const navigate = useNavigate()
    const [isExistBack, setIsExistBack] = useState(location.pathname !== "/");
    const [isOrderNow, setIsOrderNow] = useState(false);

    useEffect(() => {
        setIsExistBack(location.pathname !== "/");
        setIsOrderNow(location.pathname === '/cart')
    }, [location.pathname]);


    const goBack = ()=>{
        navigate(-1)
    }

    const deleteOrder = async () => {
        const res = await fetch('http://localhost:3001/cart-list', {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                name: "123"
            })
        });
        return await res.json();
    }

    return (
        <S.SectionHeaderWrapper>
            {isExistBack && (
                <S.BackButton onClick={goBack}>
                    <img src="/public_assets/backButton.svg" alt="뒤로가기" />
                </S.BackButton>
            )}
            {isOrderNow && (
                <S.CancelOrder onClick={deleteOrder}>
                    주문취소
                </S.CancelOrder>
            )}
        </S.SectionHeaderWrapper>
    );
}

export default SectionHeader

