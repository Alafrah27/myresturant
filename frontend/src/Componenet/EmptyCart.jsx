import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="px-5 py-4 flex flex-col h-screen my-[100px]  gap-4 max-w-[400px] mx-auto">
      <Link to="/menu" className="text-blue-600 hover:text-blue-800 space-x-2">
        &larr; Back to menu
      </Link>

      <p className="font-bold">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
