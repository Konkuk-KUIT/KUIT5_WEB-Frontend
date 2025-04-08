import React from "react";
import IconButton from "./IconButton";

import bxChat from "../assets/bx-chat.svg";
import reactionHeart from "../assets/reaction-heart.svg";
import plus from "../assets/plus.svg";

const Content = ({ items }) => {
  return (
    <ul class="post">
      {items
        .filter((item) => item.isSold)
        .map(({ title, location, timeAgo, price, comments, likes }, index) => (
          <li key={index}>
            <button type="button" className="post-product__container">
              <ProductImg />
              <div class="product__content">
                <div class="product-desc__container">
                  <span className="product__name">{title}</span>
                  <div className="product__place-date">
                    <span className="product__place">{location}</span>
                    <span>·</span>
                    <span className="product__date">{timeAgo}</span>
                  </div>
                  <span className="product__price">{price}</span>
                </div>

                <div className="product-reaction__container">
                  <Comments comments={comments} />
                  <Likes likes={likes} />
                </div>
              </div>
            </button>
          </li>
        ))}
      <IconButton src={plus} alt="추가 버튼" className="add__btn" />
    </ul>
  );
};

const ProductImg = () => {
  return (
    <img
      className="product__img"
      src="http://placehold.co/110"
      alt="제품이미지"
    />
  );
};

const Comments = ({ comments }) => {
  return comments > 0 ? (
    <div className="product-reaction">
      <IconButton src={bxChat} alt="댓글 수" />
      <span className="reaction__num">{comments}</span>
    </div>
  ) : null;
};

const Likes = ({ likes }) => {
  return likes > 0 ? (
    <div className="product-reaction">
      <IconButton src={reactionHeart} alt="좋아요 수" />
      <span className="reaction__num">{likes}</span>
    </div>
  ) : null;
};

export default Content;
