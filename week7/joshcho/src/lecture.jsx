import { createContext, useContext } from "react";

const myContext = createContext();

function App() {
  return (
    <myContext.Provider value="Hello World">
      <GrandParent />
    </myContext.Provider>
  );
}

function GrandParent() {
  return <Parent />;
}

function Parent() {
  return <Child />;
}

function Child() {
  return <GrandChild />;
}

function GrandChild() {
  return <Message />;
}

function Message() {
  const value = useContext(myContext);
  return <div>Received: {value}</div>;
}
