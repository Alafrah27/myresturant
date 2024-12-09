import { useNavigate } from "react-router-dom";
import { AuthUser } from "../features/LoginForm/Auth";
import { useEffect } from "react";

function ProtectRoute({ children }) {
  const { User } = AuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!User || User?.isAdmin !== "admin") {
      navigate("/login");
    }
  }, [User, navigate]);

  if (User?.isAdmin !== "admin") {
    return null; // Prevent rendering if the user is unauthorized
  }
  return children;
}

export default ProtectRoute;
