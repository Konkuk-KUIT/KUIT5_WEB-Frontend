import React from "react";

const Header = () => {
  return (
    <>
      <section className="list-header">
        <header>
          <div className="list-header__location">
            <span className="list-header__span">군자동</span>
            <button>
              <img
                className="list-header__arrow-img"
                src={`/assets/arrow.svg`}
                alt="토글"
              />
            </button>
          </div>
          <div className="list-header-right">
            <button>
              <img
                className="list-header__notice-img"
                src={`/assets/search.svg`}
                alt="검색"
              />
            </button>
            <button>
              <img
                className="list-header__notice-img"
                src={`/assets/menu-line.svg`}
                alt="메뉴바"
              />
            </button>
            <button>
              <img
                className="list-header__notice-img"
                src={`/assets/notice.svg`}
                alt="알림"
              />
            </button>
          </div>
        </header>
      </section>
    </>
  );
};

export default Header;
