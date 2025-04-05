import React from "react";

const BottomNav = () => {
  return (
    <section class="post-bottom">
      <button className="plus-button">
        <img src="/assets/plus-button.svg" alt="plus-button" />
      </button>
      <div className="post-bottom__icon-container">
        <button className="button">
          <img src="/assets/home-img.svg" alt="home" />
          <p className="icon-text">홈</p>
        </button>
        <button className="button">
          <img src="/assets/news-img.svg" alt="news" />
          <p className="icon-text">동네생활</p>
        </button>
        <button className="button">
          <img src="/assets/place-marker-img.svg" alt="place-marker" />
          <p className="icon-text">내 근처</p>
        </button>
        <button className="button">
          <img src="/assets/chat-img.svg" alt="chat" />
          <p className="icon-text">채팅</p>
        </button>
        <button className="button">
          <img src="/assets/user-img.svg" alt="user" />
          <p className="icon-text">나의 당근</p>
        </button>
      </div>
    </section>
  );
};

export default BottomNav;
