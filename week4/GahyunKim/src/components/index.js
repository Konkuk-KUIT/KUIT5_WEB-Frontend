const Header = ({ model }) => {
  return (
    <div>
      <h1>{model.location}</h1>
    </div>
  );
};

const Content = ({ modelList }) => {
  return (
    <div>
      {modelList.map((item, idx) => (
        <div key={idx}>
          <ol>{item.image}</ol>
          <ol>{item.title}</ol>
          <ol>
            <span>{item.location} · </span>
            <span>{item.timeAgo}</span>
          </ol>
          <ol>{item.price}</ol>
          <div>
            <span>{item.comments} </span>
            <span>{item.likes}</span>
            <div> -----------------------------------</div> {/*공백?*/}
          </div>
        </div>
      ))}
    </div>
  );
};
const BottomNav = ({ modelList }) => {
  return (
    <div style={{ display: "flex", gap: "15px" }}>
      <span>홈</span>
      <span>동네생활</span>
      <span>내 근처</span>
      <span>채팅</span>
      <span>나의 당근</span>
    </div>
  );
};

export { Header };
export { Content };
export { BottomNav };
