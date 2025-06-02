import React from "react";



const Content = ({ item }) => {
    const { title, location, timeAgo, price, image, comments, likes } = item;
  
    return (
      <article className="post">
        <div className="post__list">
            <div className="post__img">
                <img className="prod__img" src={`/assets/${image}`} alt="post imgage" />
            </div>
            <div className="post__text--area">
                <div className="post__text">
                    <span className="product__title">{title}</span>
                    <div className="product__info">
                    <span className="prod__loc">{location}</span>
                    <span className="dot">·</span>
                    <span className="prod__date">{timeAgo}</span>
                    </div>
                    <span className="product__price">{price}</span>
                </div>
                <div className="reaction">
                    <div className="chat" style={{ display: comments ? '' : 'none' }}>
                        <img src={'./assets/chat.svg'} alt="chat" />
                        <div className="chat__num">{comments}</div>
                    </div>


                    <div className="heart" style={{ display: likes ? '' : 'none' }}>
                            <img src={'./assets/heart.svg'} alt="heart reaction" />
                            <div className="heat__num">{likes}</div>
                    </div>
                </div>
            </div>
        </div>
      </article>
    );
  };

export default Content;