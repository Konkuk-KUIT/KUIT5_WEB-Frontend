import React from 'react';

const BottomNav = () => {
    return(
      <nav className='bottom-bar'>
        <section className='plus'>
          <button type='button' className='plus__item'>
            <img src="/assets/plus.svg" alt='게시하기'></img>
          </button>
        </section>
        <button type="button" className="bar__menu">
              <img src="/assets/nav_home.svg" alt="홈"></img>
              <span className="bar__text" >홈</span>
          </button>
          <button type="button" className="bar__menu">
              <img src="/assets/nav_news.svg" alt="홈"></img>
              <span className="bar__text">동네생활</span>
          </button>
          <button type="button" className="bar__menu">
              <img src="/assets/nav_place.svg" alt="홈"></img>
              <span className="bar__text">내 근처</span>
          </button>
          <button type="button" className="bar__menu">
              <img src="/assets/nav_chat.svg" alt="홈"></img>
              <span className="bar__text">채팅</span>
          </button>
          <button type="button" className="bar__menu">
              <img src="/assets/nav_user.svg" alt="홈"></img>
              <span className="bar__text">나의 당근</span>
          </button>
      </nav>
    );
  
  };

  export default BottomNav;