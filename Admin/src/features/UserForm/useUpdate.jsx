import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { axiosInstance } from "../../lib/Axios";
import { useNavigate, useParams } from "react-router-dom";

export function UsepdateUser() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id } = useParams();

  const { mutate: UpdateProfile, isPending } = useMutation({
    mutationFn: async (updatedData) => {
      const res = await axiosInstance.put(`/user/update/${id}`, updatedData);

      return res.data;
    },
    onSuccess: () => {
      toast.success("Profile updated successfully");
      queryClient.invalidateQueries(["authUser"]); // Change this if the query key is different
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "An error occurred");
    },
  });

  return { UpdateProfile, isPending };
}
