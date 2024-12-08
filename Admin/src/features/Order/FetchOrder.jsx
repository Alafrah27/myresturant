import { UseFilter } from "../../context/filterContext";
import Loading from "../../ui/Loading";
import OrderList from "./OrderList";
import { GetOrder } from "./useOrder";

function FetchOrder() {
  const { order, isLoading } = GetOrder();
  const { filterValues } = UseFilter();
  let filtered;

  if (filterValues === "All") filtered = order;
  if (filterValues === "processing")
    filtered = order.filter((item) => item.status === "processing");
  if (filterValues === "delivered")
    filtered = order.filter((item) => item.status === "delivered");
  if (filterValues === "cancelled")
    filtered = order.filter((item) => item.status === "cancelled");

  return (
    <div className="flex flex-col gap-4 w-full bg-gray-50 py-3 px-5">
      <ul className="flex flex-col gap-4 w-full bg-gray-50 py-3 px-5">
        {isLoading ? (
          <Loading />
        ) : (
          filtered?.map((item) => <OrderList item={item} key={item._id} />)
        )}
      </ul>
    </div>
  );
}

export default FetchOrder;
