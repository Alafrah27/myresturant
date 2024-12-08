import { UseFilter } from "../context/filterContext";
import FetchOrder from "../features/Order/FetchOrder";
import ProductPagination from "../features/Products/ProductPagination";
import OrderOperation from "../ui/orderOperation";
function Order() {
  const { setSearch } = UseFilter();
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[24px] space-x-2 font-semibold  ">
          Get All Orders
        </h1>
        <input
          className="flex j py-5 px-3 border-gray-300 border-solid-3 w-1/3   bg-none border rounded-md focus:outline-none"
          type="type"
          placeholder="Search by #Id"
          onChange={(e) => setSearch(e.target.value)}
        />
        <OrderOperation />
      </div>
      <div className="flex flex-col  w-full border-2 border-gray-200 my-2 p-1">
        <div className="orderList flex items-center mx-10   ">
          <div>orderId</div>
          <div>fristName</div>
          <div>email</div>
          <div>totalPrice</div>
          <div>status</div>
          <div>createAt</div>
        </div>

        <FetchOrder />
        <div className=" flex justify-end items-center bg-gray-50 px-4">
          <ProductPagination />
        </div>
      </div>
    </div>
  );
}
export default Order;
