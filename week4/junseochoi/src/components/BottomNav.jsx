import React from "react";

const BottomNav = () => {
  return (
    <section className="bottom__bar">
      <div className="home">
        <img src="./assets/home.svg" alt="홈으로 가기" className="home__img" />
        <div className="bar__text">홈</div>
      </div>
      <div className="neiborhood">
        <img
          src="./assets/neiborhood.svg"
          alt="동네생활"
          className="neiborhood__img"
        />
        <div className="bar__text">동네생활</div>
      </div>
      <div className="placemarker">
        <img
          src="./assets/placemarker.svg"
          alt="내 근처"
          className="placemarker__img"
        />
        <div className="bar__text">내 근처</div>
      </div>
      <div className="chatting">
        <img src="./assets/chat2.svg" alt="채팅" className="chatting__img" />
        <div className="bar__text">채팅</div>
      </div>
      <div className="usermenu">
        <img
          src="./assets/user.svg"
          alt="나의 정보"
          className="usermenu__img"
        />
        <div className="bar__text">나의 당근</div>
      </div>
    </section>
  );
};

export default BottomNav;
