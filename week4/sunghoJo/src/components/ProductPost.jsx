import React from "react";

const ProductPost = ({ product }) => {
  // 비구조화 할당을 사용하여 product 객체의 속성을 추출
  const { image, alt, title, location, date, price, likes, chats } = product;

  return (
    <>
      <section className="product_post">
        <button className="product-container" type="button">
          <div className="product-image-container">
            <img className="product_img" src={image} alt={alt} />
          </div>
          <div className="product-info-container">
            <div className="info-1">
              <div className="info1-1">{title}</div>
              <div className="info1-2-1">
                <div className="location">{location}</div>
                <div className="dot">·</div>
                <div className="date">{date}</div>
              </div>
              <div className="info1-2-2">{price}</div>
            </div>
            <div className="info-2">
              {likes && (
                <div className="likes">
                  <img src="/assets/heart.svg" alt="" className="heart" />
                  <div className="like-number">{likes}</div>
                </div>
              )}
              {chats && (
                <div className="chats">
                  <img src="/assets/text.svg" alt="" className="text" />
                  <div className="chat-number">{chats}</div>
                </div>
              )}
            </div>
          </div>
        </button>
      </section>
      <div className="horizon"></div>
    </>
  );
};

export default ProductPost;
