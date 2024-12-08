import { useNavigate } from "react-router-dom";
import { AuthUser } from "../features/LoginForm/Auth";
// import { useEffect } from "react";

function ProtectRoute({ children }) {
  const { User } = AuthUser();
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!User || User.isAdmin !== "admin") {
  //     navigate("/login");
  //   }
  // }, [User, navigate]);

  // Don't render children if the user is not an admin.
  if (!User || User.isAdmin !== "admin") {
    return navigate("/login"); // or a loading spinner, or nothing
  }

  return children;
}

export default ProtectRoute;
