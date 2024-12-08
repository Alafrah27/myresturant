import { useNavigate } from "react-router-dom";
import { formatCurrency } from "../../lib/Currency";

function ProcessingList({ item }) {
  const navigate = useNavigate();

  

  const {
    orderId: orderIdNumber,
    _id: orderId,
    totalPrice,
    user: { fristName, lastName },
  } = item;

  return (
    <div>
      <li
        key={orderId}
        className="flex items-center justify-between w-full border-gray-100 border-b border-t "
      >
        <h1 className="font-black">#{orderIdNumber}</h1>

        <h1 className="text-gray-500 font-semibold text-[14px]">
          {fristName} {lastName}
        </h1>

        <h1 className="text-gray-500 font-semibold text-[14px]">
          {formatCurrency(totalPrice)}
        </h1>

        <button
          onClick={() => navigate(`/order/${orderId}`)}
          className="bg-blue-500 text-white px-4 py-2 outline-none rounded-md"
        >
          New Order
        </button>
      </li>
    </div>
  );
}

export default ProcessingList;
