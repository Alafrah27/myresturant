import { UseFilter } from "../context/filterContext";
import AddProduct from "../features/Products/AddProduct";
import FetchProduct from "../features/Products/FetchProduct";
import ProductOperation from "../features/Products/ProductOperation";
import OrderPagination from "../ui/Orderpagination";

function ProductItem() {
  const { setSearch } = UseFilter();
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[24px] space-x-2 font-semibold  ">Get All Items</h1>
        <input
          className="flex j py-5 px-3 border-gray-300 border-solid-3 w-1/3   bg-none border rounded-md focus:outline-none"
          type="type"
          placeholder="Search by Name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <ProductOperation />
      </div>
      <div className="flex flex-col  w-full border-2 border-gray-200 my-2 p-1">
        <div className="productList  flex items-center   ">
          <div>image</div>
          <div>name</div>
          <div>discription</div>
          <div>discount</div>
          <div>price</div>
        </div>
        <FetchProduct />
        <div className=" flex justify-between items-center bg-gray-50 px-4">
          <OrderPagination />
          <AddProduct />
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
