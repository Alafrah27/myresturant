import {
  useMutation,
  keepPreviousData,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { axiosInstance } from "../../lib/Axios";
import toast from "react-hot-toast";

export function GetProduct() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 4,
  });

  const page = parseInt(searchParams.get("page") || 1);
  const limit = parseInt(searchParams.get("limit") || 0); // Default limit to 4
  const handlechange = (MoveCount) => {
    setSearchParams((prev) => {
      const newPage = Math.max(page + MoveCount, 0);
    
      prev.set("page", newPage);

      return prev; // Return the updated query params
    });
  };
  const { data: product, isPending: isLoading } = useQuery({
    queryKey: ["product", page, limit, id],

    queryFn: async () => {
      try {
        const res = await axiosInstance.get(
          `/product/getAll-product?page=${page}&limit=${limit}`
        );
        return res.data;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
    placeholderData: keepPreviousData,
  });
  return { product, isLoading, limit, page, handlechange };
}

export function CreateProducts() {
  const queryClient = useQueryClient();
  const { mutate: createProduct, isPending: isLoading } = useMutation({
    mutationFn: async (Data) => {
      const res = await axiosInstance.post("/product/create", Data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      toast.success("item has been added  Successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { createProduct, isLoading };
}

export function DeleteProduct() {
  const queryClient = useQueryClient();
  const { mutate: deleteProduct, isLoading } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.delete(`/product/delete-product/${id}`);
      return res.data;
    },
    onSuccess: () => {
      toast.success("Product deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["product"] });
    },
  });

  return { deleteProduct, isLoading };
}

export function UpdateProducts() {
  const queryClient = useQueryClient();
  const { mutate: updateProduct, isPending: isEditing } = useMutation({
    mutationFn: async ({ newProductData, id }) => {
      const res = await axiosInstance.put(
        `/product/update-product/${id}`,
        newProductData
      );
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["product"] });
      queryClient.invalidateQueries({ queryKey: ["category"] });
      toast.success("item has been updated  Successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });
  return { updateProduct, isEditing };
}
