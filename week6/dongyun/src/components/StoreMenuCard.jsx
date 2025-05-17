import './StoreMenuCard.css'
import {useNavigate} from "react-router-dom";

const StoreMenuCard = ({menu}) =>{
    const { name, price, isBest, ingredients} = menu;
    const navigate = useNavigate()
    const goToCart = () =>{
        navigate('/cart')
    }
    return (
        <div className="store-menu-card" onClick={goToCart}>
            <div className="store-menu-image">
            </div>
            <div className="store-menu-info">
                <div>
                    <span className="store-menu-name">{name}</span>
                    <span className="store-menu-isBest">{isBest ? "BEST" : null}</span>
                </div>
                <span className="store-menu-price">{price}원</span>
                <span className="store-menu-ingred">{ingredients} </span>
            </div>
            <button className="add-to-cart" onClick={goToCart}> 담기 </button>
        </div>
    )
}

export default StoreMenuCard