import { GetProduct } from "./useProduct";

function ProductPagination() {
  const { handlechange, page, limit, product } = GetProduct();

  // Determine the total number of products
  const totalProducts = product?.length || 0;
  // Calculate the total number of pages
  const totalPages = Math.ceil(totalProducts * limit);
  console.log(totalPages);

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
          onClick={() => handlechange(1)} // Move forward 1 page
          className="flex px-6 py-3 bg-blue-600 focus:outline-none border-none rounded-md text-white"
          // Disable if on the last page
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default ProductPagination;
