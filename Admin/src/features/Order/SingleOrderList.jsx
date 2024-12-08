import { formatCurrency } from "../../lib/Currency";
import { SingleOrderById } from "./useOrder";
function SingleOrderList({ itme }) {
  const { _id, quantity, price, product } = itme;
  const { single } = SingleOrderById();
  console.log("singleOrder !!!!", single);

  return (
    <div className="flex justify-between items-center  w-full  my-2 p-1">
      <li key={_id} className="  gap-4 w-full p-y">
        <div className="flex items-center justify-between text-xl">
          <h1 className="text-[13px]">
            <span className="font-bold">{quantity}&times;</span> {product?.name}
          </h1>
          <h1 className="font-bold">{formatCurrency(price)}</h1>
        </div>
      </li>
    </div>
  );
}
export default SingleOrderList;
