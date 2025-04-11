import React from "react";

// Header
export const Header = ({ model }) => {
  return (
    <div>
        <section className="post-header">
            <div className="post-header__location-button">
                <button type="button">
                    <span className="location">군자동</span>
                </button>
                <button type="button">
                    <img src="./assets/down-chevron.svg" alt="go back buttom"/>
                </button>
            </div>
            <div className="post-header__icon-container">
                <button type="button">
                    <img src="./assets/search.svg" alt="찾기"/>
                </button>
                <button type="button">
                    <img src="./assets/menu.svg" alt="더보기 창"/>
                </button>
                <button type="button">
                    <img src="./assets/notification.svg" alt="알림 표시"/>
                </button>
            </div>
        </section>
    </div>
  );
};

export const Content = ({ model }) => {
    return (
      <article className="post">
        <section className="products__container">
          {model.items.map((item, index) => (
            <section className="product" key={index}>
              <div className="whole-infomation">
                <img
                  src={`/assets/${item.image}`}
                  alt={item.title}
                  className="product__img"
                />
                <div className="text-information">
                  <div className="product__info">
                    <span className="product__name">{item.title}</span>
                    <div className="selllocation">
                      <span className="selllocation">{item.location}</span>
                      <span className="selllocation">·</span>
                      <span className="selllocation">{item.timeAgo}</span>
                    </div>
                    <span className="product__price">{item.price}</span>
                  </div>
                  <div className="comment-like">
                    <div className="heart">
                      <img src="./assets/small_heart.svg" alt="heart" />
                      <span>{item.likes}</span>
                    </div>
                    <div className="comment">
                      <img src="./assets/comment.svg" alt="comment" />
                      <span>{item.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </section>
      </article>
    );
  };

// BottomNav
export const BottomNav = () => {
  return (
    <nav className="bottom-bar">
         <button type="button">
            <div class="set">
                <img src="./assets/home.svg" alt="홈"/>
                <span class = "bottom-word">홈</span>
            </div>
        </button>
        <button type="button">
            <div class="set">
                <img src="./assets/news.svg" alt="동네생활"/>
                <span class = "bottom-word">동네생활</span>
            </div>
        </button>
        <button type="button">
            <div class="set">
                <img src="./assets/place-marker.svg" alt="홈"/>
                <span class = "bottom-word">내 근처</span>
            </div>
        </button>
        <button type="button">
            <div class="set">
                <img src="./assets/chat.svg" alt="홈"/>
                <span class = "bottom-word">채팅</span>
            </div>
        </button>
        <button type="button">
            <div class="set">
                <img src="./assets/user.svg" alt="홈"/>
                <span class = "bottom-word">나의 당근</span>
            </div>
        </button>
    </nav>
  );
};

