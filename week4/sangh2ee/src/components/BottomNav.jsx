
import React from "react";

const BottomNav = () => {
    return (
      <section>
        <div className="nav__bar">
          <div className="home">
            <button type="button">
              <img src={'./assets/home.svg'} alt="go home" />
            </button>
            <button type="button">
              <span className="home">홈</span>
            </button>
          </div>
          <div className="home__neighbor">
            <button type="button">
              <img src={'./assets/neighbor.svg'} alt="동네 생활" />
            </button>
            <button type="button">
              <span className="neighbor">동네생활</span>
            </button>
          </div>
          <div className="home__near">
            <button type="button">
              <img src={'./assets/near.svg'} alt="near" />
            </button>
            <button type="button">
              <span className="near">내 근처</span>
            </button>
          </div>
          <div className="home__chat">
            <button type="button">
              <img src={'./assets/chatting.svg'} alt="chatting" />
            </button>
            <button type="button">
              <span className="chatting">채팅</span>
            </button>
          </div>
          <div className="home__my">
            <button type="button">
              <img src={'./assets/my.svg'} alt="my carrot" />
            </button>
            <button type="button">
              <span className="my">나의 당근</span>
            </button>
          </div> 
        </div>
      </section>
    );
  };

  export default BottomNav;