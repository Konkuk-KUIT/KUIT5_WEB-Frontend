import './StoreInfo.css'

const StoreInfo = ({storeInfo}) =>{

    const { name, rating, reviews, deliveryTime, minOrder, purMethod } = storeInfo;

    return (
        <div className="store-detail-info">
            <span className="store-detail-name">{name}</span>
            <span className="store-detail-reviews"><img src='/public_assets/filled-star.svg'/> {rating} 리뷰{reviews}</span>
            <div className="store-detail-order">
                <span className="store-detail-order-info">
                    <div style={{
                        marginRight: '12px',
                    }}>결제방법</div>
                    <div>{purMethod}</div>
                </span>
                <span className="store-detail-order-info">
                    <div style={{
                        marginRight: '12px',
                    }}>최소주문</div>
                    <div>{minOrder}</div>
                </span>
                <span className="store-detail-order-info">
                    <div style={{
                        marginRight: '12px',
                    }}>배달시간</div>
                    <div>{deliveryTime}</div>
                </span>
            </div>
        </div>
    )
}

export default StoreInfo