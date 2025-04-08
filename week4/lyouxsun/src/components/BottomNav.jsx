import React from "react";

import home from "../assets/home.svg";
import news from "../assets/news.svg";
import placeMarker from "../assets/place-marker.svg";
import chat from "../assets/chat.svg";
import user from "../assets/user.svg";

const BottomNav = () => {
  return (
    <nav className="bottom-bar">
      <BottomMenu src={home} alt="홈 메뉴" title="홈" />
      <BottomMenu src={news} alt="동네생활 메뉴" title="동네생활" />
      <BottomMenu src={placeMarker} alt="근처 메뉴" title="내 근처" />
      <BottomMenu src={chat} alt="채팅 메뉴" title="채팅" />
      <BottomMenu src={user} alt="나의당근 메뉴" title="나의 당근" />
    </nav>
  );
};

const BottomMenu = ({ src, alt, title }) => {
  return (
    <button type="button" className="bottom__btn">
      <img src={src} alt={alt} />
      <span className="btn__name">{title}</span>
    </button>
  );
};

export default BottomNav;
