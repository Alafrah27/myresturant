import { useMutation, useQueryClient } from "@tanstack/react-query";
import { axiosInstance } from "../../lib/Axios";
import toast from "react-hot-toast";

export const DeleteUserFromList = () => {
  const queryClient = useQueryClient();
  const { mutate: deleting } = useMutation({
    mutationFn: async (postId) => {
      const res = await axiosInstance.delete(`/user/delete/${postId}`);
      return res.data;
    },
    onSuccess: () => {
      toast.success("User deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["fetchuser"] });
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  return { deleting };
};
