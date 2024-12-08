import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className=" w-full  ">
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
