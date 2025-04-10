import React from "react";

const Content = ({ item }) => {
  const { title, location, timeAgo, price, image, comments, likes } = item;
  return (
    <>
      <div className="list-one">
        <div className="list-one-item-wrapper">
          <img className="list-one-item" src={`/assets/${image}`} alt={title} />
        </div>
        <div>
          <div className="list-one-explain">
            <span className="list-one-item-title">{title}</span>
            <span className="list-one-item-location">
              {location} · {timeAgo}
            </span>
            <span className="list-one-item-price">{price}</span>
          </div>
          <div className="list-one-item-reaction">
            {comments > 0 && (
              <>
                <img src="/assets/write.svg" alt="댓글" />
                <span>{comments}</span>
              </>
            )}
            {likes > 0 && (
              <>
                <img src="/assets/heart.svg" alt="좋아요" />
                <span>{likes}</span>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
