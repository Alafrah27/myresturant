import Loading from "../../ui/Loading";
import { GetOrder } from "../Order/useOrder";
import ProcessingList from "./ProcessingList";

function ProcessingOrder() {
  const { order, isLoading } = GetOrder();

  const filtered = order
    ? order.filter((item) => item.status === "processing")
    : [];

  // Check if there are no processing orders

  return (
    <div className="relative flex flex-col gap-3 w-1/2 max-h-[290px] mx-auto  ">
      <h1 className="text-[24px] space-x-2 font-semibold text-gray-500 uppercase">
        Today Orders
      </h1>
      <div className="flex flex-col gap-4 w-full bg-gray-50 py-3 px-5 overflow-y-auto custom-scroll h-full   ">
        <ul className="flex flex-col gap-4 py-3 px-5 h-full">
          {isLoading ? (
            <Loading />
          ) : (
            filtered?.map((item) => (
              <ProcessingList item={item} key={item._id} />
            ))
          )}
        </ul>
        {filtered.length === 0 && !isLoading && (
          <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-full text-center text-gray-500 ">
            No Processing Orders
          </p>
        )}
      </div>
    </div>
  );
}

export default ProcessingOrder;
