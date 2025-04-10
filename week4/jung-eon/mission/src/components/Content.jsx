import React from "react";

const Content = ({ items }) => {
  return (
    <section class="post-list">
      {items.map(
        (
          { title, image, location, timeAgo, price, comments, likes, isSold },
          index
        ) => (
          <article className="post" key={index}>
            <img src={image} alt={title} />
            <div className="post__name">
              <h2 className="post__title">{title}</h2>
              <p className="post__info">
                {location} · {timeAgo}
              </p>
              <p className="price">{price}</p>
            </div>
            <div className="post__reaction">
              {comments > 0 && (
                <div className="chat_reaction">
                  <img src="/assets/bx_chat.svg" alt="댓글" />
                  <span className="num">{comments}</span>
                </div>
              )}
              {likes > 0 && (
                <div className="heart_reaction">
                  <img src="/assets/heart.svg" alt="좋아요" />
                  <span className="num">{likes}</span>
                </div>
              )}
              {isSold && <span className="sold-badge">판매 완료</span>}
            </div>
          </article>
        )
      )}
      ;
    </section>
  );
};

{
  /*comments가 0보다 클때 참이므로 댓글과 좋아요의 값을 반환 그렇지 않으면 X*/
  /*{marketModel.items.map((item, index) => (...))으로 배열 렌더링 사용*/
  /*비구조화할당이용 -> item.title대신title만 써도 되는데 이는 처음에 item 객체를 구조분해해서 변수로 꺼냈기 때문*/
  /*key는 배열 렌더링할 때 각 요소를 구분하기 위한 고유 식별자로 배열을 렌더링할 때 꼭 필요함함*/
}

export default Content;
