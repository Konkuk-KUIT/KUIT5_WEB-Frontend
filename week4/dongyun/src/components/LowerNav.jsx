function LowerNav() {
    return (
        <nav className="lower-nav">
            <div className="lower-nav-menu">
                <img className="lower-nav-icon" src="./assets/home_btn_icon.svg" alt="home-btn" />
                <p className="lower-nav-text">홈</p>
            </div>
            <div className="lower-nav-menu">
                <img className="lower-nav-icon" src="./assets/villiage_news_icon.svg" alt="news-btn" />
                <p className="lower-nav-text">동네생활</p>
            </div>
            <div className="lower-nav-menu">
                <img className="lower-nav-icon" src="./assets/location_marker_icon.svg" alt="nearby-btn" />
                <p className="lower-nav-text">내 근처</p>
            </div>
            <div className="lower-nav-menu">
                <img className="lower-nav-icon" src="./assets/chatting_icon.svg" alt="chatting-btn" />
                <p className="lower-nav-text">채팅</p>
            </div>
            <div className="lower-nav-menu">
                <img className="lower-nav-icon" src="./assets/profile_icon.svg" alt="mypage-btn" />
                <p className="lower-nav-text">나의 당근</p>
            </div>
        </nav>
    )
}

export default LowerNav