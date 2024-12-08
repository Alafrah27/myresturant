import { formatCurrency } from "../lib/Helper";

import { UseCartApi } from "../context/CartContext";
import Modal from "../../../Admin/src/ui/Models";
import SinglePage from "./SinglePage";
import UpdateCurrent from "../Feature/Cart/UpdateCurrent";

function MenuItem({ item }) {
  const { image, name, price, description, _id } = item;
  const { cart, setCart, currentQuantity, deleteItem } = UseCartApi();

  const currentitemquantity = currentQuantity(_id);
  const isInCart = currentQuantity > 0;

  const handleAddToCart = () => {
    const newItem = {
      pizzaId: _id,
      name,
      quantity: 1,
      price,
      totalPrice: price * 1,
    };

    setCart([...cart, newItem]);
  };
  return (
    <div className=" w-full flex flex-col gap-4" key={_id}>
      <li className=" w-full flex  gap-10 justify-between items-start spaxe-y-2 ">
        <div className="cursor-pointer  ">
          <Modal>
            <Modal.Open opens="single">
              <img
                src={image}
                alt="/"
                className="w-[67px]  h-[67px] object-cover"
              />
            </Modal.Open>

            <Modal.Window name="single">
              <SinglePage id={_id} />
            </Modal.Window>
          </Modal>
        </div>
        <div className=" flex flex-1 flex-col  pt-0.5 ">
          <h1 className="font-semibold">{name}</h1>
          <h1 className="text-sm capitalize italic text-stone-500">
            {description.split(" ").join(", ")}
          </h1>
          <div className="mt-auto flex items-center justify-between">
            <h1 className="text-sm">{formatCurrency(price)}</h1>
          </div>
        </div>
        {isInCart && (
          <div className="flex items-center gap-3">
            <UpdateCurrent
              updateCurrentQuantity={currentitemquantity}
              pizzaId={_id}
            />
            <button
              onClick={() => deleteItem(_id)}
              className="bg-orange-500 text-white px-6 py-4 rounded-full "
            >
              delete
            </button>
          </div>
        )}

        {!isInCart && (
          <button
            onClick={handleAddToCart}
            className="bg-[#3E3322]  text-white px-6 py-4 rounded-full "
          >
            Add
          </button>
        )}
      </li>
    </div>
  );
}

export default MenuItem;
