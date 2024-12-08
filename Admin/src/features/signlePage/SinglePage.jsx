// import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { axiosInstance } from "../../lib/Axios";
import toast from "react-hot-toast";

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
    <div className=" w-full">
      <ul className="w-full">
        <li key={singlepage?._id} className=" w-full h-auto px-4  py-2 ">
          <img
            src={singlepage?.image}
            alt="not found"
            className="w-[500px] h-[500px] object-cover rounded-sm"
          />
        </li>
      </ul>
    </div>
  );
};

export default SinglePage;
