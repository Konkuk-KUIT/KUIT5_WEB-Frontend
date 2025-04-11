import navHome from "../assets/nav-home.svg";
import navChat from "../assets/nav-chat.svg";
import navLocation from "../assets/nav-location.svg";
import navNewspaper from "../assets/nav-newspaper.svg";
import navPerson from "../assets/nav-person.svg";

function BottomNav() {
  return (
    <nav className="footer-nav">
      <button className="nav-menu">
        <img src={navHome} alt="home" />홈
      </button>
      <button className="nav-menu">
        <img src={navNewspaper} alt="newspaper" />
        동네생활
      </button>
      <button className="nav-menu">
        <img src={navLocation} alt="nav-location" />내 근처
      </button>
      <button className="nav-menu">
        <img src={navChat} alt="chat" />
        채팅
      </button>
      <button className="nav-menu">
        <img src={navPerson} alt="person" />
        나의 당근
      </button>
    </nav>
  );
}

export default BottomNav;
