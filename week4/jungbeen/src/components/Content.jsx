import airpods from "../assets/airpods-pro.svg";
import salesChat from "../assets/sales-chat.svg";
import heart from "../assets/heart.svg";
import byredo from "../assets/byredo-blanche.svg";
import sandwitch from "../assets/sandwitch.svg";
import iphone from "../assets/iphone-13-pro-max.svg";
import coffeeMachine from "../assets/coffee-machine.svg";

function Content({ data }) {
  const IMGS = {
    "airpods-pro": airpods,
    "byredo-blanche": byredo,
    sandwitch: sandwitch,
    "iphone-13-pro-max": iphone,
    "coffee-machine": coffeeMachine,
  };

  const renderPost = () =>
    data.items.map((item) => {
      const {
        title,
        location,
        timeAgo,
        price,
        image,
        comments,
        likes,
        isSold,
      } = item;
      return (
        isSold === true && (
          <article className="post">
            <img className="thumbnail" src={IMGS[image.split(".")[0]]} />
            <div className="item-description">
              <p className="item-name">{title}</p>
              <p className="item-place">
                {location} · {timeAgo}
              </p>
              <p className="item-price">{price}</p>
            </div>
            <div className="item-stats">
              <span>
                <img src={salesChat} alt="chat" />
                {comments}
              </span>
              <span>
                <img src={heart} alt="heart" />
                {likes}
              </span>
            </div>
          </article>
        )
      );
    });

  return <div>{renderPost()}</div>;
}

export default Content;
