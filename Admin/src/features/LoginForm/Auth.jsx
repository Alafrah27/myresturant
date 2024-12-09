import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { axiosInstance } from "../../lib/Axios";
export function AuthUser() {
  const { data: User, error } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/user/me");
        return res.data;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
  });

  return { User, error };
}


