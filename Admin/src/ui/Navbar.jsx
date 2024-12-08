import { Link } from "react-router-dom";
import { UseLogout } from "../features/LoginForm/useLogout";
import { AuthUser } from "../features/LoginForm/Auth";
import { Bell, LogOut, User2 } from "lucide-react";
import { GetOrder } from "../features/Order/useOrder";

function Navbar() {
  const { logout } = UseLogout();
  const { User } = AuthUser();
  const { order } = GetOrder();
  const processingOrderCount = order?.filter(
    (order) => order.status === "processing"
  ).length;

  return (
    <div className="flex justify-end items-center gap-[30px] p-6">
      <div className="flex gap-2 items-center">
        <img
          src={User?.image || "default-user.jpg"}
          alt={User?.image}
          className="w-[35px] h-[35px] rounded-full text-blue-600 bg-gray-400 object-cover"
        />
        <h1>
          {User?.fristName} {User?.lastName}
        </h1>
      </div>

      <div className="flex gap-5 justify-center items-center">
        <div className="relative flex items-center">
          <button className="bg-none border border-none focus:outline-none text-gray-700 font-semibold text-1xl">
            <Bell />
          </button>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-lg rounded-full w-6 h-6 font-bold flex justify-center items-center">
            {processingOrderCount}
          </span>
        </div>
        <Link to="/account" className="flex items-center">
          <button className="bg-none border border-none focus:outline-none text-gray-700 font-semibold text-1xl">
            <User2 />
          </button>
        </Link>
        {User ? (
          <button
            onClick={() => logout()}
            className="bg-none border border-none focus:outline-none  text-gray-700 semibold text-1xl"
          >
            <LogOut />
          </button>
        ) : (
          <Link to="/login">login</Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
