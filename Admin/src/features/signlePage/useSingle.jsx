import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstance } from "../../lib/Axios";
import { useQuery } from "@tanstack/react-query";

export function GetSingle() {
  const { id } = useParams();
  console.log("this id is from the single page:", id);

  const {
    data: singlepage,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["singlepage", id], // Dynamic key includes id
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/product/${id}`);
        return res.data.orders;
      } catch (err) {
        toast.error(err.response?.data?.message || "Something went wrong");
        throw err; // Rethrow the error for react-query to handle
      }
    },
  });

  return { singlepage, isLoading, error };
}
