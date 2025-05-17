import './CartCard.css'

const CartCard = () =>{

    return (
        <div className="cart-card">
            <div className="cart-image">
            </div>
            <div className="cart-info">
                <span className="cart-menu-name">토마토 샐러드</span>
                <span className="cart-menu-ingred">추천소스, 채소볼, 베이컨추가, 시저드레싱 추가</span>
                <span className="cart-menu-ingred">10,600원</span>
            </div>
            <div className="count-option">
                <div className="cart-menu-count">
                    1개
                </div>
                <div className="cart-menu-option">
                    <img src='/public_assets/arrow-front-icon.svg'/>
                </div>
            </div>
        </div>
    )
}

export default CartCard