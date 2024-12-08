import { useMutation, useQueryClient } from "@tanstack/react-query";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/Axios";

export function UseSignupForm() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: async (loginData) => {
      const res = await axiosInstance.post("/user/signup", loginData);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["authUser"] });
      navigate("/dashboard");
      toast.success("register has been Successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { signup, isLoading };
}
