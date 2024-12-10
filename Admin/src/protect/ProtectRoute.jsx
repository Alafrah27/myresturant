import { useNavigate } from "react-router-dom";
import { AuthUser } from "../features/LoginForm/Auth";

function ProtectRoute({ children }) {
  const { User } = AuthUser();
  const navigate = useNavigate();

  if (User?.isAdmin !== "admin") {
    return navigate("/"); // Prevent rendering if the user is unauthorized
  }
  return children;
}

export default ProtectRoute;
