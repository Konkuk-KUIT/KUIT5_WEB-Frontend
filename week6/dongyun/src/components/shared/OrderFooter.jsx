import './OrderFooter.css'

const OrderFooter = () => {

    return (
        <>
            <div className="order-footer">
                <div className="order-price">
                    <span className="total-price-nav">총 주문금액</span>
                    <span className="total-price-amount">12,100원</span>
                </div>

                <button className="order-btn">주문하기</button>
            </div>
        </>
    )
}

export default OrderFooter