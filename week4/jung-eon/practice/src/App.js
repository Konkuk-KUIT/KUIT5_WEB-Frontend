import React from "react";

const Content = () => {
  const name = "정언";
  return (
    <div>
      <h1>Content</h1>
      <h2> {name === "정언" ? <div>{name}</div> : <div>false</div>}</h2>
    </div>
  );
};

const Header = () => {
  return (
    <div>
      <h1>Title</h1>
      <Content />
    </div>
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
