import { UseCartApi } from "../../context/CartContext";

function UpdateCurrent({ pizzaId, updateCurrentQuantity }) {
  const { increaseItemQuantity, decreaseItemQuantity } = UseCartApi();
  return (
    <div className="flex gap-5 items-center">
      <button
        onClick={() => decreaseItemQuantity(pizzaId)}
        className="bg-[#3E3322] text-white px-6 py-4 rounded-full font-bold "
      >
        -
      </button>
      <span className="text-sm font-semibold text-[#3E3322]">
        {updateCurrentQuantity}
      </span>

      <button
        onClick={() => increaseItemQuantity(pizzaId)}
        className="bg-[#3E3322] text-white px-6 py-4 rounded-full "
      >
        +
      </button>
    </div>
  );
}

export default UpdateCurrent;
