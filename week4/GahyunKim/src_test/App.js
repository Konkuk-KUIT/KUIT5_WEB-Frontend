import React from "react";

const Content = (props) => {
  const name = "김가현";
  return (
    <div>
      <h1>Content</h1>
      <div>{name}</div>
      <div>{props.num}</div>
    </div>
  );
};

const Header = () => {
  const num = 32;
  return (
    <h1>
      <div>Title</div>
      <Content num={num} />
    </h1>
  );
};

const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

export default App;
