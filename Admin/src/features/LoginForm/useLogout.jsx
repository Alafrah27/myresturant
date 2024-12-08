import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/Axios";

export function UseLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logout } = useMutation({
    mutationFn: async () => axiosInstance.post("/user/logout"),
    onSuccess: () => {
      toast.success("logout has been Successful");
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/login");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { logout };
}
