import React from 'react';

const Header = ({location}) => {

  return (
    <header className="post-header">
      <div className='post-header__dong'>
        <span className='dong__text'>{location}</span>
        <button type='button' className='dong__button'>
          <img src="/assets/expend_arrow.svg" alt='동네 확장'></img>
        </button>
      </div>
      <div className='post-header__icon-box'>
        <button type='button' className='icon-box__button'>
          <img src="/assets/search_icon.svg" alt='찾아보기'></img>
        </button>
        <button type='button' className='icon-box__button'>
          <img src="/assets/menu_icon.svg" alt='메뉴'></img>
        </button>
        <button type='button' className='icon-box__button'>
          <img src="/assets/bell_icon.svg" alt='알림'></img>
        </button>
      </div>
    </header>
  );

};

export default Header;