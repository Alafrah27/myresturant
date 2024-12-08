import { GetOrder } from "../features/Order/useOrder";

function OrderPagination() {
  const { handlechange, page, limit, order } = GetOrder();

  // Calculate the total number of pages
  const totalPages = Math.ceil(order?.length * limit);

  console.log("totalPages", totalPages);

  return (
    <div className="flex gap-5">
      <div className="flex items-center gap-5 px-6 py-5 focus:outline-none border-none rounded-md text-white">
        <button
          className="flex px-6 py-3 bg-blue-600 focus:outline-none border-none rounded-md text-white cursor-pointer"
          onClick={() => handlechange(-1)} // Move back 1 page
          disabled={page === 0} // Disable if on the first page
        >
          Previous
        </button>
        <button
          disabled={page >= totalPages - 1} // Disable if on the last page
          onClick={() => handlechange(1)} // Move forward 1 page
          className="flex px-6 py-3 bg-blue-600 focus:outline-none border-none rounded-md text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default OrderPagination;
