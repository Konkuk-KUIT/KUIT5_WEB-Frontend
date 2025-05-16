import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>My Web</h1>
      <Outlet />
    </div>
  );
};

export default Layout;
