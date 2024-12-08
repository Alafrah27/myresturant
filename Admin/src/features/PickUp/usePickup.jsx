import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosInstance } from "../../lib/Axios";
import toast from "react-hot-toast";

export function GetPickup() {
  const {
    data: pickup,
    isPending: isLoading,
    error,
  } = useQuery({
    queryKey: ["pickup"],

    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/online/getAll");
        return res.data;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
    placeholderData: keepPreviousData,
  });

  return { pickup, isLoading, error };
}

export function UpdateAllPickup() {
  const queryClient = useQueryClient();
  const { mutate: updateAllPickup, isLoading: isEditing } = useMutation({
    mutationFn: async ({ data, id }) => {
      const res = await axiosInstance.put(`/online/update-all/${id}`, data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pickup"] }); // Pass the query key as a string
      toast.success("Order has been updated successfully");
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  return { updateAllPickup, isEditing };
}

export function UpdatePickup() {
  const queryClient = useQueryClient();
  const { mutate: updatePickup, isLoading } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.patch(`/online/update/${id}`, {
        status: "ready",
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pickup"] }); // Pass the query key as a string
      toast.success("Order has been updated successfully");
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  return { updatePickup, isLoading };
}

export function CancelPickup() {
  const queryClient = useQueryClient();
  const { mutate: cancelPickup, isLoading } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.patch(`/online/update/${id}`, {
        status: "cancelled",
      });
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pickup"] }); // Pass the query key as a string
      toast.success("Order has been cancelled successfully");
    },
    onError: (err) => {
      toast.error(err.response?.data?.message || "Something went wrong");
    },
  });

  return { cancelPickup, isLoading };
}

export function DeletePickup() {
  const queryClient = useQueryClient();
  const { mutate: deletePickup, isPending: isLoading } = useMutation({
    mutationFn: async (id) => {
      const res = await axiosInstance.delete(`/online/delete/${id}`);

      return res.data;
    },
    onSuccess: () => {
      toast.success("order deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["pickup"] });
    },
  });

  return { deletePickup, isLoading };
}

export function CreatePickupOrder() {
  const queryClient = useQueryClient();
  const { mutate: createPickup, isPending: isLoading } = useMutation({
    mutationFn: async (data) => {
      const res = await axiosInstance.post("/online/create", data);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["pickup"] });
      toast.success("item has been added  Successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { createPickup, isLoading };
}
