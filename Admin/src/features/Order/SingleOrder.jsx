import { useNavigate } from "react-router-dom";
import {
  CancelOrder,
  DeleteOrder,
  SingleOrderById,
  UpdateOrder,
} from "./useOrder";
import Modal from "../../ui/Models";
import Loading from "../../ui/Loading";
import DeleteOrderAction from "../../deleteOrderAction";
import DeleteAction from "../../ui/DeleteAction";
import SingleOrderList from "./SingleOrderList";
import { formatCurrency } from "../../lib/Currency";

function SingleOrder() {
  const { single } = SingleOrderById();
  const { updateOrder, isLoading } = UpdateOrder();
  const navigate = useNavigate();
  const { deleteOrder } = DeleteOrder();
  const { cancelOrder } = CancelOrder();

  console.log("singleOrder !!!!", single);
  const statusToTagName = {
    processing: "text-blue-700 bg-blue-100",
    delivered: "text-green-700 bg-green-100",
    cancelled: "text-red-700 bg-red-100", //
  };
  const tagStyle = statusToTagName[single?.status];

  if (isLoading) return <Loading />;

  return (
    <div className="flex flex-col gap-3 w-[700px] mx-auto">
      <div className="w-full flex flex-col gap-4">
        <div className="flex items-center justify-between w-full">
          <h1 className="font-bold  text-1xl px-5 py-2  flex items-center gap-6">
            <span>OrderId :</span>#{single?.orderId}
          </h1>
          <div className="flex items-center gap-4">
            <h1 className="font-bold  text-1xl px-5 py-2">status</h1>
            <h1
              className={`inline-block text-uppercase text-center text-[13px] font-semibold px-10 py-2 rounded-full ${tagStyle}`}
            >
              {single?.status}
            </h1>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-full  bg-gray-200 rounded-sm">
          <div className="flex flex-col  gap-4  py-4 px-5 w-full">
            <h1 className="text-2xl font-bold text-center">Customer Details</h1>

            <h1>
              Customer Name:{" "}
              <span className="mr-4 text-green-500  bg-green-100 uppercase">
                {single?.user?.fristName} {single?.user?.lastName}
              </span>
            </h1>
            <h1>
              Customer Email:{" "}
              <span className="mr-4 text-green-500 bg-green-100 uppercase">
                {single?.user?.email}
              </span>
            </h1>
            <h1>
              Customer PhonNumber:{" "}
              <span className="mr-4 text-green-500 bg-green-100 uppercase">
                {single?.phone}
              </span>
            </h1>
          </div>
        </div>
        <div>
          <ul className="flex flex-col items-center gap-5 w-full divide-slate-200 divide-y border-b border-t py-4 px-5">
            {single?.cart?.map((item) => (
              <SingleOrderList itme={item} key={item._id} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4 w-full  bg-gray-200 rounded-sm">
          <div className="flex flex-col  gap-4  py-4 px-5 w-full">
            <h1>
              type:
              <span className="mx-4 font-semibold ">delivery</span>
            </h1>
            <h1>
              Payment:
              <span className="mx-4 font-semibold ">Cash</span>
            </h1>
            <h1>
              address:
              <span className="mx-4 font-semibold ">riyadh alsulamanya</span>
            </h1>
            <h1>
              TotalPrice :{" "}
              <span className="mx-4 font-semibold ">
                {formatCurrency(single?.totalPrice)}
              </span>
            </h1>
          </div>
        </div>
        <div className="flex flex-row justify-end items-center my-1 gap-3">
          <Modal>
            {/* delivered button */}
            {single?.status === "processing" && (
              <Modal.Open opens="delivered">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-5 px-5 rounded-md border-none focus:outline-none"
                >
                  delivered
                </button>
              </Modal.Open>
            )}

            <Modal.Window name="delivered">
              <DeleteOrderAction
                type="user"
                user={single?.status}
                orderstatus="order delivered"
                onConfirm={() => updateOrder(single?._id)}
              />
            </Modal.Window>
          </Modal>

          {/* delete button */}

          {/* cancel button */}

          {single?.status === "processing" && (
            <Modal>
              <Modal.Open opens="delete-order">
                <button className="bg-red-500     text-white py-5 px-5 rounded-md border-none focus:outline-none">
                  cancel
                </button>
              </Modal.Open>
              <Modal.Window name="delete-order">
                <DeleteOrderAction
                  type="user"
                  user={single?.status}
                  orderstatus="oder cancelled"
                  onConfirm={() => cancelOrder(single?._id)}
                />
              </Modal.Window>
            </Modal>
          )}

          <Modal>
            <Modal.Open opens="delete-order">
              <button className="bg-red-900     text-white py-5 px-5 rounded-md border-none focus:outline-none">
                delete
              </button>
            </Modal.Open>
            <Modal.Window name="delete-order">
              <DeleteAction
                type="user"
                user={single?.orderId}
                onConfirm={() => deleteOrder(single?._id)}
              />
            </Modal.Window>
          </Modal>

          <button
            onClick={() => navigate(-1)}
            className="bg-green-500     text-white py-5 px-5 rounded-md border-none focus:outline-none"
          >
            back
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleOrder;
