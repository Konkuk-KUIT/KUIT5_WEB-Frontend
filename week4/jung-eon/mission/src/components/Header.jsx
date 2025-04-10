import React from "react";

const Header = ({ location }) => {
  return (
    <div className="post-header">
      <div className="post-header__left">
        <h1 className="post-header__text">{location}</h1>
        <img src="./assets/expand-arrow.svg" alt="expand-button" />
      </div>
      <div className="post-header__icon-container">
        <button className="button">
          <img src="./assets/search.svg" alt="search-button" />
        </button>
        <button className="button">
          <img src="./assets/menu1.svg" alt="menu-button" />
        </button>
        <button className="button">
          <img src="./assets/notification1.svg" alt="notification1-button" />
        </button>
      </div>
    </div>
  );
};

export default Header;
