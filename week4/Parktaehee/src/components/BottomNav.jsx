import React from "react";

const BottomNav = () => {
  return (
    <>
      <div className="carrot-footer-add">
        <button>
          <img className="" src={`/assets/add.svg`} alt="추가" />
        </button>
      </div>
      <footer className="carrot-footer">
        <div className="carrot-footer-main">
          <div className="carrot-footer-option">
            <img className="" src={`/assets/home.svg`} alt="홈" />
            <span>홈</span>
          </div>
          <div className="carrot-footer-option">
            <img className="" src={`/assets/life.svg`} alt="동네생활" />
            <span>동네생활</span>
          </div>
          <div className="carrot-footer-option">
            <img className="" src={`/assets/location.svg`} alt="내 근처" />
            <span>내 근처</span>
          </div>
          <div className="carrot-footer-option">
            <img className="" src={`/assets/chat.svg`} alt="채팅" />
            <span>채팅</span>
          </div>
          <div className="carrot-footer-option">
            <img className="" src={`/assets/my.svg`} alt="나의 당근" />
            <span>나의 당근</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default BottomNav;
