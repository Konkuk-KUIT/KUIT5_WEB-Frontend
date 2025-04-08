import React from 'react';
import marketModel from '../models/MarketModel.js'

const Content = () => {
    const { items } = marketModel;
    const itemsForSale = items.filter(item => item.isSold);

    return (
        <article className='item-area'>{
            itemsForSale.length === 0 ? (
                <p>판매 중인 물품이 없습니다.</p>
            ) : (
                itemsForSale.map(({ title, location, timeAgo, price, image, comments, likes }, index) => (
                    <button 
                    key={`${title}-${location}-${price}`}
                    type="button" className="item__button">
                        <div className="item-area__item">
                            <img src={`/assets/${image}`} alt="판매 상품" className="item__image"></img>
                            <div className="item__info">
                                <div className="item__text">
                                    <span className="item__title">{title}</span>
                                    <div className="item__dong-date">
                                        <span className="item__dong">{location}</span>
                                        <span>·</span>
                                        <span className="item__date">{timeAgo}</span>
                                    </div>
                                    <span className="item__price">{price}</span>
                                </div>
                                <div className="item__share">
                                    <div className="item__spec" style={comments===0? {display:"none"}:{}}>
                                        <img src="/assets/chat_icon.svg" alt="채팅 수"></img>
                                        <span className="chat__count" id="item__count">{comments}</span>
                                    </div>
                                    <div className="item__spec" style={likes===0? {display:"none"}:{}}>
                                        <img src="/assets/heart_icon.svg" alt="좋아요 수"></img>
                                        <span className="heart__count" id="item__count">{likes}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                ))
            )
        }
        </article>
    );
};

export default Content;