import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "./Axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function UseLogout() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: logout } = useMutation({
    mutationFn: async () => axiosInstance.post("/user/logout"),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("logout has been Successful");
      navigate("/login");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { logout };
}
