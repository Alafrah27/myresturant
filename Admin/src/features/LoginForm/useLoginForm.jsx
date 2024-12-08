import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/Axios";
export function UseLoginForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    mutate: login,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: async (loginData) => {
      const res = await axiosInstance.post("/user/login", loginData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/dashboard");
      toast.success("Login has been Successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { login, isLoading, error };
}
