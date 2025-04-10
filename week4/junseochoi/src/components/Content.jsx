import React from "react";

const Content = ({ items }) => {
  return (
    <>
      <section className="post__list">
        {items.map(
          (items, index) =>
            items.isSold && (
              <article className="post" key={index}>
                <section className="post-middle">
                  <div className="together">
                    <div className="merc1">
                      <img
                        src="http://www.placehold.co/240"
                        alt="상품1"
                        className="merc__img1"
                      />
                    </div>
                    <div className="merc__info">
                      <h2 className="merc__name1">{items.title}</h2>
                      <span className="merc__comp">
                        {items.location} · {items.timeAgo}
                      </span>
                      <span className="merc__price">{items.price}</span>
                    </div>
                  </div>
                  <div className="bottom__content">
                    {items.comments > 0 && (
                      <div className="chat">
                        <img
                          src="./assets/chat.svg"
                          alt="채팅 수"
                          className="chat1"
                        />
                        <div className="chat__num">{items.comments}</div>
                      </div>
                    )}
                    {items.likes > 0 && (
                      <div className="heart">
                        <img
                          src="./assets/heart.svg"
                          alt="좋아요 수"
                          className="heart1"
                        />
                        <div className="heart_num">{items.likes}</div>
                      </div>
                    )}
                  </div>
                </section>
              </article>
            )
        )}
      </section>
      {/* 오른쪽 메뉴 더보기 버튼 */}
      <button className="plusmenu">
        <img
          src="./assets/plusbutton.svg"
          alt="메뉴 더보기"
          className="plus__img"
        />
      </button>
    </>
  );
};

export default Content;
