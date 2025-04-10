import React from "react";

const Header = () => {
  return (
    <section className="post-header">
      <header>
        <div className="header__icons">
          <span className="region_name">군자동</span>
          <button>
            <img
              src="./assets/bottom_chevron.svg"
              alt="select_region"
              className="select_region"
            />
          </button>
        </div>
        <div className="header__icon">
          <button className="icon__img">
            <img src="./assets/search.svg" alt="검색 버튼" />
          </button>
          <button className="icon__img">
            <img src="./assets/menu.svg" alt="메뉴 버튼" />
          </button>
          <button className="icon__img">
            <img src="./assets/notofication.svg" alt="알림 버튼" />
          </button>
        </div>
      </header>
    </section>
  );
};

export default Header;
