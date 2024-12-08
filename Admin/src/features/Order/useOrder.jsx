import {
  keepPreviousData,
  // keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosInstance } from "../../lib/Axios";
import toast from "react-hot-toast";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";

export function GetOrder() {
  const { id } = useParams();
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    limit: 4,
  });

  const page = parseInt(searchParams.get("page") || 1);
  const limit = parseInt(searchParams.get("limit") || 0);

  const handlechange = (MoveCount) => {
    setSearchParams((prev) => {
      const newPage = Math.max(page + MoveCount, 0);

      prev.set("page", newPage);

      return prev; // Return the updated query params
    });
  };

  const { data: order, isLoading: isLoading } = useQuery({
    queryKey: ["order", id, page, limit],

    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/order/getAll-order`);
        return res.data.orders;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
    placeholderData: keepPreviousData,
  });
  // processingOrderCount
  return {
    order,
    isLoading,

    handlechange,
    limit,
    page,
  };
}

export function DeleteOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: deleteOrder, isPending: isLoading } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.delete(`/order/delete-order/${id}`);

      return res.data;
    },
    onSuccess: () => {
      toast.success("order deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["order"] });
      navigate("/dashboard");
    },
  });

  return { deleteOrder, isLoading };
}

export function SingleOrderById() {
  const { id } = useParams();
  const { data: single, isPending: isLoading } = useQuery({
    queryKey: ["singleOrder", id],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/order/order-detail/${id}`);
        return res.data.orders;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
  });

  return { single, isLoading };
}

export function UpdateOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: updateOrder, isLoading } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.patch(`/order/update-order/${id}`, {
        status: "delivered",
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] }); // Pass the query key as a string
      toast.success("Order has been updated successfully");
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  return { updateOrder, isLoading };
}

export function CancelOrder() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: cancelOrder, isLoading } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.patch(`/order/update-order/${id}`, {
        status: "cancelled",
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["order"] }); // Pass the query key as a string
      toast.success("Order has been cancelled successfully");
      navigate("/dashboard");
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  return { cancelOrder, isLoading };
}

// export function GetOrder() {
//   const { id } = useParams();
//   const [searchParams, setSearchParams] = useSearchParams({
//     page: 1,
//     limit: 4,
//   });

//   const page = parseInt(searchParams.get("page") || 1);
//   const limit = parseInt(searchParams.get("limit") || 4);

//   const handleChange = (MoveCount) => {
//     setSearchParams((prev) => {
//       const newPage = Math.max(page + MoveCount, 1); // page should start from 1
//       prev.set("page", newPage);
//       return prev; // Return the updated query params
//     });
//   };

//   const {
//     data: orderData,
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["order", id, page, limit],
//     queryFn: async () => {
//       try {
//         const res = await axiosInstance.get(
//           `/order/getAll-order?page=${page}&limit=${limit}`
//         );
//         return res.data.orders; // Return the entire response (with `orders` and `total`)
//       } catch (err) {
//         toast.error(err.response?.data?.message || "Something went wrong");
//         return { orders: [], total: 0 }; // Ensure it returns an object even on error
//       }
//     },
//     placeholderData: { orders: [], total: 0 }, // Placeholder for initial load
//   });

//   const orders = orderData?.orders || []; // Access the orders array
//   const totalOrders = orderData?.total || 0; // Total count of orders from the API

//   return {
//     orders, // This will be the current page's orders
//     isLoading,
//     isError,
//     handleChange,
//     limit,
//     page,
//     totalOrders, // Pass total orders count for pagination control
//   };
// }
