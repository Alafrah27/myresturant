import {
  HiOutlineCake,
  HiOutlineCalendarDays,
  HiOutlineChatBubbleLeftRight,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineUsers,
} from "react-icons/hi2";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav>
      <div className=" flex flex-col gap-10 my-[50px]">
        <li className="flex gap-4 list-none no-underline items-center">
          <NavLink to="/dashboard" className="flex gap-4 justify-center ">
            <HiOutlineHome className="text-4xl text-blue-700 " />
            <span>Dasboard</span>
          </NavLink>
        </li>

        <li className="flex gap-4 list-none no-underline items-center">
          <NavLink to="/order" className="flex gap-4">
            <HiOutlineCalendarDays className="text-4xl text-blue-700 font-bold" />
            <span>Order</span>
          </NavLink>
        </li>

        <li className="flex gap-4 list-none no-underline items-center">
          <NavLink to="/listitem" className="flex gap-4">
            <HiOutlineCake className="text-4xl text-blue-700 font-bold" />
            <span>Menu Item</span>
          </NavLink>
        </li>

        <li className="flex gap-4 list-none no-underline items-center">
          <NavLink to="/pickup" className="flex gap-4">
            <HiOutlineChatBubbleLeftRight className="text-4xl text-blue-700 font-bold" />
            <span> delivery & pick up</span>
          </NavLink>
        </li>
        <li className="flex gap-4 list-none no-underline items-center">
          <NavLink to="/category" className="flex gap-4">
            <HiOutlineChatBubbleLeftRight className="text-4xl text-blue-700 font-bold" />
            <span> Categeries</span>
          </NavLink>
        </li>

        <li className="flex gap-4 list-none no-underline items-center">
          <NavLink to="/users" className="flex gap-4">
            <HiOutlineUsers className="text-4xl text-blue-700 font-bold" />
            <span> Create Admin</span>
          </NavLink>
        </li>

        <li className="flex gap-4 list-none no-underline items-center">
          <NavLink to="/getallusers" className="flex gap-4">
            <HiOutlineCog6Tooth className="text-4xl text-blue-700 font-bold" />
            <span>All Users</span>
          </NavLink>
        </li>
      </div>
    </nav>
  );
}

export default MainNav;
