import Modal from "../../ui/Models";
import Menus from "../../ui/Menus";
import { HiTrash } from "react-icons/hi2";
import DeleteAction from "../../ui/DeleteAction";

import { formatDistanceToNow } from "date-fns";
import DeleteOrderAction from "../../deleteOrderAction";
import { CancelPickup, DeletePickup, UpdatePickup } from "./usePickup";
import CreatePickup from "./CreatePickup";

// import { Link } from "react-router-dom";

function PickList({ items, index }) {
  const { _id: orderId, pickUpNumber, companyName, status, orderDate } = items;
  const { updatePickup } = UpdatePickup();
  const { cancelPickup } = CancelPickup();
  const { deletePickup } = DeletePickup();

  const statusToTagName = {
    pending: "text-blue-700 bg-blue-100",
    ready: "text-green-700 bg-green-100",
    cancelled: "text-red-700 bg-red-100", //
  };
  const tagStyle = statusToTagName[status];

  return (
    <div>
      <li
        className=" pickList border-b-[2px] w-full flex items-center  space-x-3 "
        key={orderId}
      >
        <h1 className="font-black">{index}</h1>

        <h1 className="font-black">#{pickUpNumber}</h1>
        <h1>{companyName}</h1>

        <h1
          className={`inline-block space-x-4 uppercase text-center text-[12px] font-semibold px-1 py-2 rounded-full ${tagStyle}`}
        >
          {status}
        </h1>
        <h1>{formatDistanceToNow(new Date(orderDate), { addSuffix: true })}</h1>

        <div className="flex justify-end items-center text-[16px]">
          <Modal>
            <Menus.Menu>
              <Menus.Toggle id={orderId} />

              <Menus.List id={orderId}>
                <Modal.Open opens="delivered">
                  <Menus.Button icon={<HiTrash />}>read to pickup</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="edit">
                  <Menus.Button icon={<HiTrash />}>edit</Menus.Button>
                </Modal.Open>
                <Modal.Open opens="cancel">
                  <Menus.Button icon={<HiTrash />}>cancel</Menus.Button>
                </Modal.Open>

                <Modal.Open opens="delete">
                  <Menus.Button icon={<HiTrash />}>Delete</Menus.Button>
                </Modal.Open>
              </Menus.List>

              <Modal.Window name="delivered">
                <DeleteOrderAction
                  type="user"
                  orderstatus="order delivered"
                  onConfirm={() => updatePickup(orderId)}
                />
              </Modal.Window>

              <Modal.Window name="cancel">
                <DeleteOrderAction
                  type="user"
                  orderstatus=" cancel order"
                  user={status}
                  onConfirm={() => cancelPickup(orderId)}
                />
              </Modal.Window>

              <Modal.Window name="delete">
                <DeleteAction
                  type="user"
                  user={pickUpNumber}
                  onConfirm={() => deletePickup(orderId)}
                />
              </Modal.Window>
              <Modal.Window name="edit">
                <CreatePickup pickupToEdit={items} />
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

export default PickList;
