import { keepPreviousData, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { axiosInstance } from "../lib/Axios";
import { useSearchParams } from "react-router-dom";

export function UseFetchUser() {
  const [searchParam, setSearchParams] = useSearchParams({ page: 0, limit: 4 });

  const page = parseInt(searchParam.get("page") || 0);
  const limit = parseInt(searchParam.get("limit") || 0); // Default limit to 4

  const handlechange = (MoveCount) => {
    setSearchParams((prev) => {
      const newPage = Math.max(page + MoveCount, 0);
      prev.set("page", newPage);
      return prev; // Return the updated query params
    });
  };

  const { data: fetch, isPending } = useQuery({
    queryKey: ["fetchuser", page, limit],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get(
          `/user/All-Users?page=${page}&limit=${limit}`
        );
        return res.data;
      } catch (err) {
        toast.error(err.response.data.message || "Something went wrong");
      }
    },
    placeholderData: keepPreviousData,
  });

  return { fetch, isPending, limit, page, handlechange };
}

// Pagination Component

function Pagination() {
  const { handlechange, page, limit, fetch } = UseFetchUser();
  const totalProducts = fetch?.length || 0;
  // const count = limit * (page + 1);
  const totalPages = Math.ceil(totalProducts * limit);

  return (
    <div className="flex justify-between items-center w-full mx-auto px-[20px] py-3 bg-gray-50">
      <div className="flex items-center gap-5 px-6 py-5 focus:outline-none border-none rounded-md text-white">
        <button
          className="flex px-6 py-3 bg-blue-600 focus:outline-none border-none rounded-md text-white cursor-pointer"
          onClick={() => handlechange(-page)} // Move back 1 page
        >
          Previous
        </button>
        <button
          disabled={page === totalPages - 1} // Disable if on the last page
          onClick={() => handlechange(1)} // Move forward 1 page
          className="flex px-6 py-3 bg-blue-600 focus:outline-none border-none rounded-md text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
