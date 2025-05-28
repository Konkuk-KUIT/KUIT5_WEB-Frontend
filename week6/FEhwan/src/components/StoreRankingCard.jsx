import './StoreRankingCard.css'; 
const StoreRankingCard = ({ store }) => {
    const { rank, name, rating, reviews, deliveryTime, deliveryFee, minOrder, purMethod } = store;

    return (
        <div className="store-card">
            <div className="store-thumbnail" />

            <div className="store-info">
                <div className="store-rank">{rank}위</div>
                <div className="store-name">{name}</div>
                <div className="store-rating">⭐ {rating} ({reviews})</div>
                <div className="store-meta">
                    <span>{deliveryTime}</span> · <span>배달비 {deliveryFee}</span>
                </div>
            </div>
        </div>
    );
};

export default StoreRankingCard;
