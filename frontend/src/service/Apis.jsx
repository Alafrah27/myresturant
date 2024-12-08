// const url = "http://localhost:3000/api/v1/";
// export const GetMenu = async () => {
//   try {
//     const res = await fetch(`${url}/product/getAll-product`);

import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { axiosInstance } from "../lib/Axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     const { data } = await res.json();

//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// const API_URL = "https://react-fast-pizza-api.onrender.com/api";

// export async function getMenu() {
//   const res = await fetch(`${API_URL}/menu`);

//   // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
//   if (!res.ok) throw Error("Failed getting menu");

//   const { data } = await res.json();
//   return data;
// }

export function AuthUser() {
  const { data: User, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/user/me");
        return res.data;
      } catch (err) {
        // toast.error("your not login please try again");
        console.log(err);
      }
    },
  });

  return { User, error };
}



export function GetAllProduct() {
  const { data: product, isLoading: isLoading } = useQuery({
    queryKey: ["product"],

    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/product/getAll-product`);
        return res.data;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
    placeholderData: keepPreviousData,
  });
  return { product, isLoading };
}

export function UseLoginForm() {
  const navigate = useNavigate();

  const {
    mutate: login,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: async (loginData) => {
      const res = await axiosInstance.post("/user/login", loginData);
      return res.data;
    },
    onSuccess: () => {

      navigate("/");
      toast.success("Login has been Successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { login, isLoading, error };
}

export function UseSignupForm() {
  const navigate = useNavigate();
  const { mutate: signup, isPending: isLoading } = useMutation({
    mutationFn: async (loginData) => {
      const res = await axiosInstance.post("/user/signup", loginData);
      return res.data;
    },
    onSuccess: () => {
      navigate("/");
      toast.success("register has been Successful");
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { signup, isLoading };
}
export function GetOrderById() {
  const { id } = useParams();
  const { data: getOrder, isLoading: isLoading } = useQuery({
    queryKey: ["getOrderById", id],

    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/order/${id}`);
        return res.data.orders;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
    placeholderData: keepPreviousData,
  });
  return { getOrder, isLoading };
}
export function CreateOrder() {
  const { User } = AuthUser();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: createOrder, isPending: isLoading } = useMutation({
    mutationFn: async (order) => {
      const res = await axiosInstance.post("/order/create", order);
      return res.data;
    },
    onSuccess: () => {
      toast.success("register has been Successful");
      queryClient.invalidateQueries({ queryKey: ["getOrderById"] });
      navigate(`/order/${User._id}`);
    },

    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  return { createOrder, isLoading };
}
