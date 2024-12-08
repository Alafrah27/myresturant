import { formatCurrency } from "../lib/Helper";

function OrderList({ getOrder }) {
  return (
    <div className="w-full flex flex-col gap-5 my-4">
      <ul className="divide-y divide-stone-200 px-3 lg:px-2 flex flex-col gap-4 my-5 w-full ">
        {getOrder?.cart?.map((item, index) => {
          return (
            <li
              key={index}
              className="flex justify-between items-center w-full"
            >
              <h1>
                <span className="font-bold">{item.quantity}&times;</span>{" "}
                <span>{item.product.name}</span>
              </h1>

              <h1>{formatCurrency(item.price)}</h1>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default OrderList;
