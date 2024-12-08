import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../lib/Axios";
import toast from "react-hot-toast";

export function GetCategory() {
  const { data: category, isPending: isLoding } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/category/getAll-category");
        return res.data;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
  });
  return { category, isLoding };
}
export function CreateCategories() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: categoryData, isPending: isLoding } = useMutation({
    mutationFn: async (Data) => {
      const res = await axiosInstance.post("/category/create-category", Data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      queryClient.invalidateQueries({ queryKey: ["product"] });

      navigate("/dashboard");
      toast.success("Category has been Successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { categoryData, isLoding };
}

export function DeleteCategory() {
  const queryClient = useQueryClient();
  const { mutate: deletingCategory, isPending: isLoding } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.delete(`/category/delete-category/${id}`);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["category"] });
      toast.success("Category has been Successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { deletingCategory, isLoding };
}
