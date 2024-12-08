import { Link, useNavigate } from "react-router-dom";
import EmptyCart from "../../Componenet/EmptyCart";
import { UseCartApi } from "../../context/CartContext";
import CartItem from "./CartItem";

function Cart() {
  const { cart, clearItems } = UseCartApi();
  const navigate = useNavigate();
  console.log("cart", cart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="max-w-[950px] h-[100%] mx-auto my-10">
      <Link
        to="/menu"
        className="text-blue-800 hover:text-blue-950 mx-auto px-7"
      >
        &larr; Back to menu
      </Link>
      <ul className="divide-y divide-stone-200 px-3 lg:px-2 flex flex-col gap-5 w-full   ">
        {cart?.map((item) => (
          <CartItem item={item} key={item._id} />
        ))}
      </ul>
      <div className="flex gap-5 items-center my-5  px-6 py-2">
        <button
          onClick={() => navigate("/order/new")}
          className="bg-orange-500 text-white px-6 py-4 rounded-sm"
        >
          Order Now
        </button>

        <button
          onClick={() => clearItems()}
          className="bg-gray-500 text-white px-6 py-4 rounded-sm"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
}

export default Cart;
