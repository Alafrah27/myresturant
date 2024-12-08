import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { axiosInstance } from ".././lib/Axios";

const SinglePage = ({ id }) => {
  const { data: singlepage } = useQuery({
    queryKey: ["singlepage", id], // Dynamic key includes id
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(`/product/${id}`);
        return res.data;
      } catch (err) {
        toast.error(err.response?.data?.message || "Something went wrong");
        throw err; // Rethrow the error for react-query to handle
      }
    },
  });

  return (
    <ul className="w-[400px] h-auto flex flex-col items-center overflow-hidden">
      <li key={singlepage?._id} className=" w-full h-auto px-4  py-2 ">
        <img
          src={singlepage?.image}
          alt="not found"
          className="w-full h-full object-cover rounded-sm"
        />
      </li>
    </ul>
  );
};

export default SinglePage;
