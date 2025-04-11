
function UpperNav({ location }) {
    return (
        <nav className="upper-nav">
            <div className="location">
                <p className="location-name">{location}</p>
                <img className="location-expand-btn" src="./assets/expand_arrow.svg" alt="dropDown" />
            </div>

            <div className="menu-set">
                <img className="menu-set-btn" src="./assets/search_btn.svg" alt="search-btn" />
                <img className="menu-set-btn" src="./assets/menu_btn.svg" alt="menu-btn" />
                <img className="menu-set-btn" src="./assets/notification_icon.svg" alt="noti-btn" />
            </div>
        </nav>
    )
}

export default UpperNav