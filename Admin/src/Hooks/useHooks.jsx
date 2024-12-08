import { useNavigate } from "react-router-dom";

export function UseMoveBack() {
  const navigate = useNavigate();
  return () => navigate(-1);
}
