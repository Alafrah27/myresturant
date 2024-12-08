// import { Outlet } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div
      className="
    layout relative custom-scroll "
    >
      <Navbar />
      <Sidebar />
      <div className="bg-gray-100 p-[4rem_4.8rem_6.8rem] overflow-y-auto ">
        <div className="w-[100rem] lg:w-[120rem] my-0 mx-auto flex gap-[3.2rem]">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
