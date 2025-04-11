import React from "react";

const Header = () => {
  return (
    <section className="post-header">
      <header>
        <div className="top-left">
          <button className="location-tab" type="button">
            <span className="now-location">군자동</span>
            <img
              className="location-list-icon"
              src="/assets/expand_arrow.svg"
              alt="지역 설정 탭"
            />
          </button>
        </div>
        <div className="top-right">
          <button className="search_icon" type="button">
            <img
              className="search_icon_img"
              src="/assets/search.svg"
              alt="검색 버튼"
            />
          </button>
          <button className="menu_list_icon" type="button">
            <img
              className="menu_list_icon_img"
              src="/assets/menu.svg"
              alt="메뉴 버튼"
            />
          </button>
          <button className="notification_icon" type="button">
            <img
              className="notification_icon_img"
              src="/assets/notification.svg"
              alt="알림 버튼"
            />
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
