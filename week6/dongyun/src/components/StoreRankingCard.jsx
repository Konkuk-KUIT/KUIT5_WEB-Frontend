import './StoreRankingCard.css'
import {useNavigate} from "react-router-dom";

const StoreRankingCard = ({store}) =>{
    const navigate = useNavigate()
    const { rank, name, rating, reviews, deliveryTime, deliveryFee} = store;
    const goToStoreMenu = () => {
        navigate('/store/1')
    }
    return (
        <div className="store-card" onClick={goToStoreMenu}>
            <div className="store-image">

            </div>
            <div className="store-info">
                { parseInt(rank) > 3 ? null : <span className="store-rank">{rank}위</span> }
                <span className="store-name">{name}</span>
                <span className="store-reviews">
                    <img src='/public_assets/blanked-star.svg' /> {rating} ({reviews})</span>
                <span className="store-delievery">{deliveryTime} ∙ 배달비 {deliveryFee}원 </span>
            </div>
        </div>
    )
}

export default StoreRankingCard;