
function MarketItem({ item }) {
    const { title, location, timeAgo, price, image, comments, likes } = item
    return (
        <article className="market-item">
            <div className="item-img">
                {/* <img src={`../../public/dummy_assets/${image}`} /> */}
                <img src={`/dummy_assets/${image}`} alt={image} />
            </div>
            <div className="item-info">
                <div className="item-description">
                    <p className="item-name">{title}</p>
                    <p className="item-loc-date">{location} · {timeAgo}</p>
                    <p className="item-price">{price}</p>
                </div>
                {/* <!-- <p>채팅 이모지 / 채팅 개수 / 하트 이모지 / 하트 개수 (모두 0이라면 없음)</p> --> */}
                <div className="offer-info">
                    {comments == "0" ? null :
                        <span className="offer-info-box">
                            <img
                                className="offer-info-img"
                                src="./assets/offer_chat_count_icon.svg"
                                alt="chat-count"
                            />
                            <p className="offer-info-detail">{comments}</p>
                        </span>
                    }
                    {likes == "0" ? null :
                        <span className="offer-info-box">
                            <img className="offer-info-img" src="./assets/heart_icon.svg" alt="likes-count" />
                            <p className="offer-info-detail">{likes}</p>
                        </span>
                    }
                </div>
            </div>
        </article>
    )
}

export default MarketItem