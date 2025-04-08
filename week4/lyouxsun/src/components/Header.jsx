import React from "react";

import downChevron from "../assets/down-chevron.svg";
import search from "../assets/search.svg";
import menu from "../assets/menu.svg";
import notification from "../assets/notification.svg";

const Header = ({ location }) => {
  return (
    <section className="post-header">
      <header className="post-header__icon-container">
        <button className="post-place__btn" type="button">
          <span className="post-place__name">{location}</span>
          <IconButton
            src={downChevron}
            alt="지역 선택"
            className="post-place__img"
          />
        </button>
        <div class="header__menu-container">
          <IconButton src={search} alt="검색" className="search__btn" />
          <IconButton src={menu} alt="메뉴" className="menu__btn" />
          <IconButton
            src={notification}
            alt="알림"
            className="notification__btn"
          />
        </div>
      </header>
    </section>
  );
};

const IconButton = ({ src, alt, className }) => {
  return (
    <button type="button" className={className}>
      <img src={src} alt={alt} />
    </button>
  );
};

export default Header;
