import Modal from "../../ui/Models";
import Menus from "../../ui/Menus";
import { HiEye, HiTrash } from "react-icons/hi2";
import DeleteAction from "../../ui/DeleteAction";
import { formatCurrency } from "../../lib/Currency";

import { CancelOrder, DeleteOrder, UpdateOrder } from "./useOrder";
import { useNavigate } from "react-router-dom";
import { formatDistanceToNow } from "date-fns";
import DeleteOrderAction from "../../deleteOrderAction";

// import { Link } from "react-router-dom";

function OrderList({ item }) {
  const {
    _id: orderId,
    orderId: orderIDNumber,

    user: { email, fristName, lastName },
    status,
    totalPrice,
    createAt,
  } = item;
  const { updateOrder } = UpdateOrder();
  const { deleteOrder, isLoading } = DeleteOrder();
  const { cancelOrder } = CancelOrder();

  const statusToTagName = {
    processing: "text-blue-700 bg-blue-100",
    delivered: "text-green-700 bg-green-100",
    cancelled: "text-red-700 bg-red-100", //
  };
  const tagStyle = statusToTagName[status];

  const navigate = useNavigate();
  return (
    <div>
      <li
        className=" orderList border-b-[2px] w-full flex items-center  "
        key={orderId}
      >
        <h1 className="font-black">#{orderIDNumber}</h1>

        <h1>
          {fristName} {lastName}
        </h1>
        <h1>{email}</h1>
        <h1>{formatCurrency(totalPrice)}</h1>
        <h1
          className={`inline-block text-uppercase text-center text-[10px] font-semibold px-3 py-2 rounded-full ${tagStyle}`}
        >
          {status}
        </h1>
        <h1>{formatDistanceToNow(new Date(createAt), { addSuffix: true })}</h1>

        <div className="flex justify-end items-center text-[16px]">
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={orderId} />

              <Menus.List id={orderId}>
                <Menus.Button
                  icon={<HiEye />}
                  onClick={() => navigate(`/order/${orderId}`)}
                >
                  see detail
                </Menus.Button>

                <Modal.Open opens="delivered">
                  <Menus.Button icon={<HiTrash />}>deliverd</Menus.Button>
                </Modal.Open>

                {status === "processing" && (
                  <Modal.Open opens="cancel">
                    <Menus.Button icon={<HiTrash />}>cancel</Menus.Button>
                  </Modal.Open>
                )}

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delivered">
                <DeleteOrderAction
                  onConfirm={() => updateOrder(orderId)}
                  type="user"
                  orderstatus="order delivered"
                  user={orderIDNumber}
                  disabiled={isLoading}
                />
              </Modal.Window>

              <Modal.Window name="cancel">
                <DeleteOrderAction
                  onConfirm={() => cancelOrder(orderId)}
                  type="user"
                  orderstatus=" cancel order"
                  user={status}
                  disabiled={isLoading}
                />
              </Modal.Window>

              <Modal.Window name="delete">
                <DeleteAction
                  type="user"
                  user={orderIDNumber}
                  disabiled={isLoading}
                  onConfirm={() => deleteOrder(orderId)}
                />
              </Modal.Window>
            </Menus.Menu>
          </Modal>
        </div>

        {/* {show && (
          <Overlay
            show={show}
            setShow={setShow}
            user={user?._id}
            users={user.fristName}
          />
        )} */}
      </li>
    </div>
  );
}

export default OrderList;
