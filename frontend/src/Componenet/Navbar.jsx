import { useState } from "react";
import { HiMiniBars3, HiMiniShoppingCart } from "react-icons/hi2";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { UseCartApi } from "../context/CartContext";
import { AuthUser } from "../service/Apis";
import { UseLogout } from "../lib/Logout";
function Navbar() {
  const { User } = AuthUser();
  const { logout } = UseLogout();
  const [showMenu, setShowMenu] = useState(false);
  const { cart } = UseCartApi();
  const navigate = useNavigate();
  return (
    <div className=" h-[70px] z-50 ">
      <header className="flex justify-between items-center w-full  p-10 text-gray-200 font-semibold text-[13px]">
        <div className="flex gap-2 items-center bg-[#3E3322]  p-6 text-[13px] rounded-[5px]">
          <span>F</span>
          <span>&</span>
          <span className="rotate-180 transform">F</span>
        </div>

        <nav className=" hidden lg:block    ">
          <ul className="flex items-center  gap-10">
            <NavLink to="/">
              <li className=" py-5">Home</li>
            </NavLink>

            <NavLink to="/cart">
              <li>Cart</li>
            </NavLink>
            <NavLink to="/menu">
              <li>Menu</li>
            </NavLink>
            <NavLink to={`/order/${User?._id}`}>
              <li>My Order</li>
            </NavLink>
          </ul>
        </nav>

        <div className="hidden lg:block ">
          <div className="flex gap-10 justify-between items-center">
            <div className="relative">
              <h1 className="text-black text-[19px]">
                <Link to="/cart">
                  <HiMiniShoppingCart size={25} className="text-[#3E3322]" />
                </Link>
              </h1>
              {cart?.length > 0 && (
                <span className="absolute top-[-8px] right-[-8px] text-white bg-red-500 rounded-full w-[15px] h-[15px] flex justify-center items-center">
                  {cart?.length}
                </span>
              )}
            </div>
            {!User ? (
              <button className="bg-[#3E3322] py-3 px-6 border border-none focus:outline-none rounded-[10px] text-white font-semibold text-1xl">
                <Link to="/login">Sing IN</Link>
              </button>
            ) : (
              <button
                onClick={() => {
                  navigate("/");
                  logout();
                }}
                className="bg-[#3E3322] py-3 px-6 border border-none focus:outline-none rounded-[10px] text-white font-semibold text-1xl"
              >
                Logout
              </button>
            )}
          </div>
        </div>

        <div className="lg:hidden flex gap-6 items-center">
          <div className="relative">
            <h1 className="text-black text-[19px]">
              <Link to="/cart">
                <HiMiniShoppingCart size={25} className="text-[#3E3322]" />
              </Link>
            </h1>
            {cart?.length > 0 && (
              <span className="absolute top-[-8px] right-[-8px] text-white bg-red-500 rounded-full w-[15px] h-[15px] flex justify-center items-center">
                {cart?.length}
              </span>
            )}
          </div>
          <button
            className="bg-[#3E3322] py-4 px-6 border border-none focus:outline-none rounded-[10px] text-white font-semibold text-1xl"
            onClick={() => setShowMenu(!showMenu)}
          >
            <HiMiniBars3 size={25} />
          </button>
        </div>

        {showMenu && (
          <div
            className={`fixed left-0 bottom-0 flex flex-col justify-between gap-7 bg-gray-200 z-50 w-full h-screen py-5 transition-all duration-500 transform ${
              showMenu
                ? "translate-y-0 opacity-100"
                : "translate-y-full opacity-0"
            }`}
          >
            <span
              onClick={() => setShowMenu(false)}
              className="text-[30px] rounded-full h-10 w-10 text-black absolute top-5 right-5 cursor-pointer"
            >
              &times;
            </span>

            <ul className="flex flex-col border py-5 px-8 gap-[8px] text-black my-[30px]">
              <h1 className="text-[12px] space-x-2 font-semibold text-black uppercase">
                Hello🖐, {User ? User?.fristName : ""}
              </h1>
              <Link to="/">
                <li
                  onClick={() => setShowMenu(false)}
                  className="border-b border-gray-600 py-5"
                >
                  Home
                </li>
              </Link>

              <Link to="/menu">
                <li
                  onClick={() => setShowMenu(false)}
                  className="border-b border-gray-600 py-5"
                >
                  Menu
                </li>
              </Link>

              <Link to={`/order/${User?._id}`}>
                <li
                  onClick={() => setShowMenu(false)}
                  className="border-b border-gray-600 py-5"
                >
                  My Order
                </li>
              </Link>
            </ul>

            {!User ? (
              <button
                onClick={() => setShowMenu(false)}
                className="bg-[#3E3322] py-8 px-8 border border-none focus:outline-none text-white font-semibold text-1xl absolute bottom-0 w-full"
              >
                <Link to="/login"> Sing IN</Link>
              </button>
            ) : (
              <button
                onClick={() => {
                  logout();
                  navigate("/");
                  setShowMenu(false);
                }}
                className="bg-[#3E3322] py-8 px-8 border border-none focus:outline-none text-white font-semibold text-1xl absolute bottom-0 w-full"
              >
                Logout
              </button>
            )}
          </div>
        )}
      </header>
    </div>
  );
}
export default Navbar;
