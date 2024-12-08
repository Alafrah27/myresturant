import MainNav from "./MainNav";

function Sidebar() {
  return (
    <aside className="sidebar flex flex-col  bg-grey-0 border border-grey-50 ">
      <h3 className=" flex gap-3 text-3xl font-bold text-slate-700">
        F&F{" "}
        <span className="hidden lg:block text-3xl font-bold text-slate-700">
          DASHBOARD
        </span>
      </h3>
      <MainNav />
    </aside>
  );
}

export default Sidebar;
