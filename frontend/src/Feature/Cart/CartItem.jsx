import { UseCartApi } from "../../context/CartContext";
import { formatCurrency } from "../../lib/Helper";
import UpdateCurrent from "./UpdateCurrent";

function CartItem({ item }) {
  const { deleteItem, currentQuantity } = UseCartApi();
  const { name, quantity, totalPrice, pizzaId } = item;

  const updateCurrentQuantity = currentQuantity(pizzaId);

  return (
    <div className="w-full my-42 px-5">
      <li key={pizzaId} className="py-3   flex justify-between  items-center">
        <p className="mb-1 sm:mb-5 font-semibold ">
          {quantity}&times; {name}
        </p>
        <div className="flex gap-5 items-center ">
          <div className="flex gap-10 items-center">
            <p className="text-[11px] font-bold">
              {formatCurrency(totalPrice)}
            </p>
            <UpdateCurrent
              pizzaId={pizzaId}
              updateCurrentQuantity={updateCurrentQuantity}
            />
            <button
              onClick={() => deleteItem(pizzaId)}
              className="bg-[#3E3322] text-white px-6 py-4 rounded-full "
            >
              delete
            </button>
          </div>
        </div>
      </li>
    </div>
  );
}

export default CartItem;
