import EmptyCart from "../Componenet/EmptyCart";
import { formatCurrency } from "../lib/Helper";
import { GetOrderById } from "../service/Apis";
import Loader from "../ui/Loader";
import OrderList from "./OrderList";
import { formatDistanceToNow } from "date-fns";

function GetAllOrders() {
  const { getOrder, isLoading } = GetOrderById();

  if (isLoading) return <Loader />;
  if (!getOrder) return <EmptyCart />;

  const statusToTagName = {
    processing: "text-blue-700 bg-blue-100",
    delivered: "text-green-700 bg-green-100",
    cancelled: "text-red-700 bg-red-100", //
  };

  return (
    <div className="space-y-8 px-4 py-6 w-full mx-auto my-5">
      <div className="max-w-[950px] flex flex-col gap-9  mx-auto">
        {getOrder?.map((order, index) => (
          <div key={index} className="my-4 border-b  pb-4 px-4">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <h1 className="text-1xl font-semibold text-black">
                Order ID #{order.orderId}
              </h1>

              <h1
                className={`inline-block text-uppercase text-center text-[9px] font-semibold px-5 py-3 rounded-full ${
                  statusToTagName[order.status]
                }`}
              >
                Status: {order.status}
              </h1>
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2 bg-stone-200 px-6 py-9">
              <p className="font-medium">Only minutes left 😃</p>
              <p className="text-1xl text-stone-500">
                {" "}
                {formatDistanceToNow(new Date(order.createAt), {
                  addSuffix: true,
                })}
              </p>
            </div>

            <OrderList getOrder={order} />

            <div className="space-x-2 bg-stone-200 px-6 py-5 flex flex-col gap-3">
              Valt : {formatCurrency(0)}
              <p className="font-bold flex flex-col">
                To pay on delivery: ${formatCurrency(order.totalPrice)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetAllOrders;
