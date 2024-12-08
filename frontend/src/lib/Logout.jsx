import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "./Axios";
import toast from "react-hot-toast";

export function UseLogout() {
  const queryClient = useQueryClient();

  const { mutate: logout } = useMutation({
    mutationFn: async () => {
      const res = await axiosInstance.post("/user/logout");
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("logout has been Successful");
    },

    onError: (error) => {
      console.log(error);
      toast.error(error.response.data.message);
    },
  });

  return { logout };
}
