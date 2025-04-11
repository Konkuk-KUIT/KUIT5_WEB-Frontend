import React from "react";

const BottomBar = () => {
  return (
    <div id="bottom">
      <div className="add">
        <button className="add-button" type="button">
          <img
            className="plus-icon"
            src="/assets/plus-math.svg"
            alt="물건 등록"
          />
        </button>
      </div>
      <div className="bottom-menu">
        <button className="icon" type="button">
          <img src="/assets/home.svg" alt="홈" />
          <div className="home-button">홈</div>
        </button>
        <button className="icon" type="button">
          <img src="/assets/news.svg" alt="동네생활" />
          <div className="news-button">동네생활</div>
        </button>
        <button className="icon" type="button">
          <img src="/assets/place-marker.svg" alt="내 근처" />
          <div className="place-marker">내 근처</div>
        </button>
        <button className="icon" type="button">
          <img src="/assets/chat.svg" alt="채팅" />
          <div className="chat-button">채팅</div>
        </button>
        <button className="icon" type="button">
          <img src="/assets/user.svg" alt="나의 당근" />
          <div className="user-button">나의 당근</div>
        </button>
      </div>
    </div>
  );
};

export default BottomBar;
