import expandArrow from "../assets/expand-arrow.svg";
import search from "../assets/search.svg";
import menu from "../assets/menu.svg";
import notification from "../assets/notification.svg";

function Header({ data }) {
  return (
    <header className="page-header">
      <span className="dong-selector">
        {data.location}
        <button>
          <img src={expandArrow} alt="expand-arrow"></img>
        </button>
      </span>
      <div className="header_simple-bar">
        <button>
          <img src={search} alt="search" />
        </button>
        <button>
          <img src={menu} alt="menu" />
        </button>
        <button>
          <img src={notification} alt="notification" />
        </button>
      </div>
    </header>
  );
}

export default Header;
